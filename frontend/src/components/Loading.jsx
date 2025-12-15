import React from "react";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-600 p-4">
      <div className="w-full max-w-sm flex flex-col gap-4">
        
        {/* Top row avatar + lines */}
        <div className="flex items-center gap-4">
          <div className="skeleton h-14 w-14 sm:h-16 sm:w-16 rounded-full shrink-0"></div>

          <div className="flex flex-col gap-3 flex-1">
            <div className="skeleton h-4 w-24"></div>
            <div className="skeleton h-4 w-32"></div>
          </div>
        </div>

        {/* Big content block */}
        <div className="skeleton h-28 sm:h-32 w-full rounded-md"></div>
      </div>
    </div>
  );
}

export default Loading;
