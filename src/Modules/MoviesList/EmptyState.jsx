import React from "react";

const EmptyState = () => {
  return (
    <div className="flex items-center justify-center h-[61vh] w-full overflow-hidden">
      <div className="flex flex-col items-center gap-y-4">
        <img src="/popcorn-icon.png" className="w-40 h-40" alt="Moviefix" />
        <p className="text-2xl text-center text-grey-10 capitalize">
          No movies available
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
