
interface CheckListItemProps {
  text: string;
}

const CheckListItem = ({ text }: CheckListItemProps) => {
  return (
    <li className="flex items-start">
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <span>{text}</span>
    </li>
  );
};

export default CheckListItem;
