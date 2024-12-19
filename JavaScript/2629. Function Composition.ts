type F = (x: any) => any;

function compose(functions: F[]): F {
    
    return function(x: any): any {
        for( const fn of functions.reverse())
        {
            x = fn(x);

        }
        return x;
    }
};