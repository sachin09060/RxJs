import React, { useEffect, useState } from "react";
import { Observable } from "rxjs";

const Observables = () => {
  useEffect(() => {
    const observables = new Observable<string>((observer) => {
      observer.next("Hello World!");
      observer.next("Hello World Again!");
      observer.complete();
    });

    observables.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("Observable Completed!"),
    });

    const observer = {
      next: (value: string) => console.log(value),
      error: (err: any) => console.error(err),
      complete: () => console.log("Done!"),
    };

    const subscription = observables.subscribe(observer);
    subscription.unsubscribe();
  }, []);

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-lg text-center h-screen">
      <div className="text-xl font-bold text-gray-700">Observable Example</div>
      <div className="mt-2 text-gray-500">Check the console for output!</div>
    </div>
  );
};

export default Observables;
