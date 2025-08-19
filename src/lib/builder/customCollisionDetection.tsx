import { rectIntersection, CollisionDetection, DroppableContainer } from '@dnd-kit/core';

export const customDropzoneCollisionDetection: CollisionDetection = (args) => {
  const { active, droppableContainers, pointerCoordinates } = args;

  // Only apply custom collision for sidebar and section drags
  if (!active.data.current?.source && active.data.current?.type !== 'section') {
    return rectIntersection(args);
  }

  // First check for expanded dropzone collisions
  const dropzoneCollisions = Array.from(droppableContainers.values())
    .filter((container: DroppableContainer) => container.data.current?.type === 'dropzone')
    .map((container: DroppableContainer) => {
      const rect = container.rect.current;
      if (!rect) return null;
      
      // Expand the dropzone detection area
      const expandedRect = {
        ...rect,
        top: rect.top - 12,
        bottom: rect.bottom + 12,
        height: rect.height + 24
      };
      
      // Check if pointer is within expanded area
      if (pointerCoordinates && 
          pointerCoordinates.x >= expandedRect.left && 
          pointerCoordinates.x <= expandedRect.right &&
          pointerCoordinates.y >= expandedRect.top && 
          pointerCoordinates.y <= expandedRect.bottom) {
        return {
          id: container.id,
          data: container.data
        };
      }
      return null;
    })
    .filter((collision): collision is { id: string; data: any } => collision !== null);

  // If dropzone collision found, return it
  if (dropzoneCollisions.length > 0) {
    return dropzoneCollisions;
  }

  // Otherwise use default collision detection
  return rectIntersection(args);
};