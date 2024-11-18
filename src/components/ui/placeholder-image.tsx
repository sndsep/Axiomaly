// src/components/ui/placeholder-image.tsx
export function PlaceholderImage({ 
  width, 
  height, 
  className 
}: { 
  width: number; 
  height: number; 
  className?: string;  
}) {
  return (
    <img
      src={`/api/placeholder/${width}/${height}`}
      alt="Placeholder"
      className={className}
      width={width}
      height={height}
    />
  )
}