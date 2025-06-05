// to Display details like this : Name : Anna

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between w-full px-4 py-1 text-sm">
    <strong>{label}</strong>
    <span>{value}</span>
  </div>
);

export default InfoRow;
