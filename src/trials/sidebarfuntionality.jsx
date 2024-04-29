import { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
    {
      id: 'icon1',
      label: 'Icon 1',
      items: ['Item 1', 'Item 2', 'Item 3']
    },
    {
      id: 'icon2',
      label: 'Icon 2',
      items: ['Item A', 'Item B', 'Item C']
    },
    {
      id: 'icon3',
      label: 'Icon 3',
      items: ['Item X', 'Item Y', 'Item Z']
    }
    // Add more icons here if needed
  ];

  const handleIconHover = (iconId) => {
    setSelectedIcon(iconId);
  };

  return (
    <div className="sidebar">
      <div className="icons">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`icon ${selectedIcon === icon.id ? 'active' : ''}`}
            onMouseEnter={() => handleIconHover(icon.id)}
          >
            {icon.label}
            <div className="popup">
              <ul>
                {selectedIcon === icon.id &&
                  icon.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;