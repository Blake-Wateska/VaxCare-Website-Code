import vaxuraLogo from '@/assets/vaxura-logo.png';

const VaxuraLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <img 
      src={vaxuraLogo} 
      alt="Vaxura Logo" 
      className={className}
    />
  );
};

export default VaxuraLogo;
