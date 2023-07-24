import React from "react";

const Grid = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-white font-extrabold">
    // <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] text-white font-extrabold min-h-screen">
    // <div className="grid grid-cols-1 lg:grid-cols-[auto,auto] text-white font-extrabold min-h-screen">
    //   {/* <div className="bg-blue-200 p-8 hidden lg:block lg:shrink-0">1</div> */}
    //   {/* <div className="bg-blue-300 p-8">2</div> */}
    //   {/* <div className="bg-blue-400 p-8">3</div> */}
    //   <div className="bg-blue-500 p-8">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
    //     minus perferendis consectetur provident corrupti sequi distinctio animi
    //     iste a! Ipsum, iusto. Iusto placeat dolores eligendi magni ipsum eos
    //     veniam recusandae!
    //   </div>
    //   <div className="bg-blue-600 p-8">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolor
    //     laboriosam alias amet corrupti commodi rerum obcaecati repellat earum
    //     atque est ut, id, architecto vero perferendis nemo autem explicabo et.
    //     Quas voluptatibus, eum sunt laudantium ab provident, vel veniam odio
    //     vitae obcaecati excepturi consectetur assumenda at amet harum quia
    //     labore aspernatur alias asperiores consequuntur modi dolorum
    //     exercitationem soluta. Sint, a! Blanditiis fuga maiores repellendus.
    //     Consequuntur dolorem veniam esse, facere est maxime adipisci quidem
    //     earum odit! Dignissimos non placeat totam et excepturi. Quaerat quas
    //     porro non cum, voluptates impedit aut blanditiis?
    //   </div>
    // <div className="grid grid-cols-[1fr,auto]">
    //   <div className="bg-blue-100">1</div>
    //   <div>
    //     <div className="bg-blue-200 w-24 h-24"></div>
    //   </div>
    // </div>
    // <div className="lg:container grid grid-rows-[auto,1fr,auto] min-h-screen gap-2">
    //   <div className="bg-blue-300 p-4">Header</div>
    //   <div className="grid grid-cols-[250px,1fr] gap-2">
    //     <div className="bg-slate-200 shrink-0 p-4">Sidebar</div>
    //     <div className="bg-slate-400 p-4">Main Content</div>
    //   </div>
    //   <div className="bg-green-300 p-4">Footer</div>
    // </div>

    // layout
    // <div className="lg:container grid grid-cols-1 grid-rows-[auto,1fr,auto] lg:grid-cols-[300px,1fr] min-h-screen gap-2 font-black">
    //   <div className="col-span-full bg-blue-300 p-4 rounded-lg">Header</div>
    //   <div className="bg-blue-400 p-4 rounded-lg hidden lg:block">Sidebar</div>
    //   <div className="bg-slate-300 p-4 rounded-lg">Main</div>
    //   <div className="bg-blue-300 col-span-full p-4 rounded-lg">Footer</div>
    // </div>
    <div className="container grid grid-cols-3 w-[80%]">
      <div>
        <div className="bg-blue-200 w-[300px] h-[400px]"></div>
        <h2 className="mt-3 font-semibold">Bilal Fareed</h2>
        <p className="mt-3">$400</p>
      </div>
      <div>
        <div className="bg-green-200 w-[300px] h-[400px]"></div>
        <h2 className="mt-3 font-semibold">Ratan Lal</h2>
        <p className="mt-3">$500</p>
      </div>
      <div>
        <div className="bg-yellow-200 w-[300px] h-[400px]"></div>
        <h2 className="mt-3 font-semibold">Ahmed Shah</h2>
        <p className="mt-3">$450</p>
      </div>
    </div>
  );
};

export default Grid;
