import React, { useState, useEffect } from 'react';
import brick from './brick.png'
import EASA from './EASA.jpg'

const SEQUENCES = {
  a: ['1-1', '1-2', '1-3', '1-4'],
  b: ['1-1', '2-2', '3-3', '1-3']
};

const DESTINATIONS = {
  a: {
    image: `${EASA}`,
    color: 'blue',
    redirect: 'https://easa.tcal.xyz'
  },
  b: {
    image: 'https://images.unsplash.com/photo-1602153508753-4ace888c10a0?auto=format&fit=crop&q=80&w=800',
    color: 'blue',
    redirect: '/contact'
  }
};

const BRICK_TEXTURES = [brick];

function App() {
  const [clickedBricks, setClickedBricks] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [animatingBricks, setAnimatingBricks] = useState<string[]>([]);
  const [destination, setDestination] = useState<keyof typeof DESTINATIONS | null>(null);

  useEffect(() => {
    if (clickedBricks.length === 4) {
      const sequence = clickedBricks.join(',');
      if (SEQUENCES.a.join(',') === sequence) {
        setDestination('a');
        setTimeout(() => startBrickAnimation(), 2000);
      } else if (SEQUENCES.b.join(',') === sequence) {
        setDestination('b');
        setTimeout(() => startBrickAnimation(), 2000);
      } else {
        setClickedBricks([]);
      }
    }
  }, [clickedBricks]);

  useEffect(() => {
    if (isOpen && destination) {
      setTimeout(() => {
        window.location.href = DESTINATIONS[destination].redirect;
      }, 2000);
    }
  }, [isOpen, destination]);

  const startBrickAnimation = () => {
    const rows = 8;
    const cols = 8;
    const center = { row: Math.floor(rows/2), col: Math.floor(cols/2) };
    
    const brickPositions = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const distance = Math.sqrt(
          Math.pow(i - center.row, 2) + 
          Math.pow(j - center.col, 2)
        );
        brickPositions.push({
          id: `${i}-${j}`,
          distance
        });
      }
    }

    brickPositions.sort((a, b) => a.distance - b.distance);

    const wavesCount = 8;
    const bricksPerWave = Math.ceil(brickPositions.length / wavesCount);

    for (let wave = 0; wave < wavesCount; wave++) {
      const startIndex = wave * bricksPerWave;
      const endIndex = Math.min(startIndex + bricksPerWave, brickPositions.length);
      const waveBricks = brickPositions.slice(startIndex, endIndex);

      setTimeout(() => {
        setAnimatingBricks(prev => [
          ...prev,
          ...waveBricks.map(brick => brick.id)
        ]);
        
        if (wave === wavesCount - 1) {
          setTimeout(() => setIsOpen(true), 500);
        }
      }, wave * 150);
    }
  };

  const handleBrickClick = (row: number, col: number) => {
    if (isOpen) return;
    const brickId = `${row}-${col}`;
    setClickedBricks(prev => [...prev, brickId].slice(-4));
  };

  const getRandomSlideValues = () => {
    const directions = [
      { x: -150, y: -150 },
      { x: 150, y: -150 },
      { x: -150, y: 150 },
      { x: 150, y: 150 },
      { x: 0, y: -200 },
      { x: 0, y: 200 },
      { x: -200, y: 0 },
      { x: 200, y: 0 },
    ];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    return {
      '--slide-x': `${randomDirection.x}%`,
      '--slide-y': `${randomDirection.y}%`,
    } as React.CSSProperties;
  };

  const renderBricks = () => {
    const rows = 8;
    const cols = 8;
    const bricks = [];

    for (let i = 1; i <= rows; i++) {
      const row = [];
      if (i % 2 === 1) {
        row.push(
          <div
            key={`${i}-half`}
            className="w-[6rem] md:w-[12rem] opacity-0"
          />
        );
      }

      for (let j = 1; j <= cols; j++) {
        const brickId = `${i}-${j}`;
        const isClicked = clickedBricks.includes(brickId);
        const isAnimating = animatingBricks.includes(brickId);
        const textureIndex = (i * 3 + j) % BRICK_TEXTURES.length;
        
        row.push(
          <div
            key={brickId}
            onClick={() => handleBrickClick(i, j)}
            style={{
              ...getRandomSlideValues(),
              backgroundImage: `url(${BRICK_TEXTURES[textureIndex]})`,
              ...(isAnimating ? getRandomSlideValues() : {}),
            }}
            className={`
              h-8 md:h-16 w-[6rem] md:w-[12rem] mx-1 md:mx-2 cursor-pointer transition-all duration-300
              bg-cover bg-center
              hover:brightness-110 hover:shadow-lg
              relative overflow-hidden
              transform ${isAnimating ? 'slide-out-fade' : ''}
              rounded-sm border-2 border-gray-800
              ${isClicked ? `ring-2 ring-${destination ? DESTINATIONS[destination].color : 'amber'}-400 brightness-125` : ''}
            `}
          >
            <div className={`
              absolute inset-0 transition-opacity duration-300
              ${isClicked ? `bg-${destination ? DESTINATIONS[destination].color : 'amber'}-500/30` : 'bg-black/10'}
            `} />
          </div>
        );
      }
      bricks.push(
        <div key={i} className="flex justify-center mb-1 md:mb-3 first:mt-0">
          {row}
        </div>
      );
    }
    return bricks;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden p-2 md:p-4">
      <div className="relative transform scale-[0.45] md:scale-[0.85]">
        <div className="relative rounded-lg shadow-2xl backdrop-blur-sm">
          <div className="relative">
            {renderBricks()}
          </div>
          
          {isOpen && destination && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in p-4">
              <div className="text-center w-full max-w-md">
                <img
                  src={DESTINATIONS[destination].image}
                  alt="Destination"
                  className="w-full h-auto rounded-lg shadow-2xl animate-scale-up"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;