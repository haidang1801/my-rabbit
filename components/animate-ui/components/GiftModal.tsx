interface Props {
  onClose: () => void;
}
export function GiftModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60  flex justify-center items-center cursor-pointer"
        onClick={onClose}
      >
        <img className="h-[60vh] rounded-2xl" src="/thiep.jpg" alt="Thiep" />
      </div>
    </div>
  );
}
