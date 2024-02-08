import { Ripples } from '^/components';
import { Button } from '^/components/ui/button';

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
