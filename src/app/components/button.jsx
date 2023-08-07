const Button = ({ className, children, ...props }) => {
  return (
    <button className={`rounded-lg text-white bg-dark-slate-grey font-bold hover:bg-gradient-to-r hover:from-peach hover:to-carrot ${className}`} {...props}>{children}</button>
  );
};

export default Button;
