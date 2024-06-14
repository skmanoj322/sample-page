interface ButtonProps {
  w: string;
  h: string;
  text: string;
}
export function Button(props: ButtonProps) {
  return (
    <div
      className={`flex justify-center items-center  border rounded-[8px] w-[158px] h-[41px] font-mono bg-[#000000]`}
    >
      <div className="flex justify-center items-center">
        <span className="text-[#FFFFFF] font-[500] text-xs  ">
          {props.text}
        </span>
      </div>
    </div>
  );
}
