import React, { useState } from 'react';
import { ChartLineUp, Recycle, Tray, Users } from '@phosphor-icons/react'

function IconList() {

  const icons = [
    { id: 'recycle', Component: Recycle },
    { id: 'tray', Component: Tray },
    { id: 'users', Component: Users },
    { id: 'chartLineUp', Component: ChartLineUp },
  ];
  const [selectedIcon, setSelectedIcon] = useState('tray');

  return (
    <div className='flex flex-col gap-y-4'>
      {icons.map(({ id, Component }) => (
        <div
          key={id}
          className={`px-[30%] cursor-pointer ${selectedIcon === id ? 'bg-white py-3' : 'py-2'}`}
          onClick={() => setSelectedIcon(id)}
        >
          <Component size={32} color={selectedIcon === id ? "#2970FF" : "#ffffff"} />
        </div>
      ))}
    </div>
  );
}

export default IconList;