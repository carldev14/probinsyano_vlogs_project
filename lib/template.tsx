import React from 'react';

type DisplayProps = {
  RouteName: string;

};

const Template_Land: React.FC<DisplayProps> = ({ RouteName }) => {
  return (
    <div className="w-full h-auto p-4 ">
      <section className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-sky-600 text-xl '>{RouteName}</h1>
 
      </section>


    </div>
  );
};

export default Template_Land;
