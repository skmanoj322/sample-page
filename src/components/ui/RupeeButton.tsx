interface WhiteButtonProps {
  w?: string;
  h?: string;
  text?: string;
}
export function RupeeButton(props: WhiteButtonProps) {
  const { text = "₹" } = props;
  return (
    <div
      className={`flex justify-center items-center  border border-[#F2F2F2] rounded-[8px] w-[44px] h-[41px] font-mono `}
    >
      <div className="flex justify-center items-center">
        <span className="text-[#1F1F1F] font-[500] text-xs  ">{text}</span>
      </div>
    </div>
  );
}
