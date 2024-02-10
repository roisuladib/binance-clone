import { Button, Ripples } from '^/components';

export default function Trade() {
   return (
      <div className="">
         <Button>
            Click me{' '}
            <Ripples
               optimize
               fillAndHold
            />
         </Button>
      </div>
   );
}
