function Button(props) {
  return (
    <div>
      <button className="text-base bg-transparent text-blue-400 text-secondary font-bold py-1 px-4 border-2 border-primary hover:border-secondary rounded">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
