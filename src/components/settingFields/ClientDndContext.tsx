'use client'; // This directive ensures this file is treated as a Client Component

import React, { useEffect, useState } from 'react';
// Do NOT import DndContext directly at the top level here anymore.
// import { DndContext, DndContextProps } from '@dnd-kit/core'; // <-- REMOVE THIS LINE

// Define the DndContextProps interface if you still need it for typing props
// (it's often better to import the type only if possible)
import type { CollisionDetection, DndContextProps, DragEndEvent, DragStartEvent } from '@dnd-kit/core'; // Import types only if available separately

interface ClientDndContextWrapperProps extends DndContextProps {
  // Pass other props that DndContext expects
  onDragEnd: (event: DragEndEvent) => void;
  onDragStart: (event: DragStartEvent) => void; // Adjust type as needed
  collisionDetection?: CollisionDetection;
  // ... any other props you might pass
}

export default function ClientDndContextWrapper({ children, ...props }: ClientDndContextWrapperProps) {
  const [DndContextComponent, setDndContextComponent] = useState<React.ComponentType<DndContextProps> | null>(null);

  useEffect(() => {
    // Dynamically import dnd-kit ONLY when on the client side
    // and after the component has mounted.
    import('@dnd-kit/core')
      .then(module => {
        setDndContextComponent(() => module.DndContext);
      })
      .catch(error => {
        console.error("Failed to load @dnd-kit/core on client:", error);
      });
  }, []); // Run once on client mount

  if (!DndContextComponent) {
    // Render a fallback while dnd-kit is loading on the client
    return <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading interactive elements...</div>;
  }

  // Once DndContext is loaded, render it
  return (
    <DndContextComponent {...props}>
      {children}
    </DndContextComponent>
  );
}