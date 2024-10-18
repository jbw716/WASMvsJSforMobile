# Opening Points:
-   Client-side rendering is almost always preferred, because these days, we can reasonably assume that network connectivity is a larger bottleneck than device processing power.
-   **This can be a double-edged sword.** Client-side ***rendering*** does not mean client-side ***processing***! Data manipulation and processing should be handled on the server-side unless there is a very specific need for client-side or offline handling of data.
-   There are some things that server-side code handles significantly more efficiently.
-   Large data manipulation can end up taking significantly more time when done on the client. Client devices, code, and engines simply aren’t developed to handle that as fast as possible.
-   For example, I won’t tell you that concurrency with multithreading isn’t possible on the client-side, however, it does require lower level, OS-specific code to do so.
-   This is why handling something needing true concurrency would be much faster and easier to handle server-side. In our case, .NET has the Task Parallel Library already built for us that we can tap into.


# Segue To WASM:
-   This is where WebAssembly, or WASM, comes into play.
-   WASM allows for running near-native code execution speed from the context of a web browser. What this means for us is that we can execute .NET code natively in the web browser!
-   This can allow for significantly faster and more efficient data processing and handling **ON THE CLIENT!**
-   **WITH GREAT POWER COMES GREAT RESPONSIBILITY:** Just because you can, doesn’t mean you should.
-   There are still things that will be better to handle server-side.
-   Think of this advantage as just a speed increase to the things that you would otherwise already be handling on the client side. I would not recommend using this tool to move server-side code to the client unless it provides a tangible benefit to the end user like decreased load times or more offline functionality.
-   For example, if I have an application for doing intensive number crunching based on user inputs that should dynamically update the results as a user changes their inputs, the raw processing speed of WASM will be much quicker than in something like JavaScript, and we won’t have to make an API request and wait for a response over the network with every change that the user makes.

**With all of that said, let’s move into the demo!**
