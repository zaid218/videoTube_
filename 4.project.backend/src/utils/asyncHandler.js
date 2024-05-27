const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await Promise.resolve(requestHandler(req, res, next));
        } catch (error) {
            const statusCode = error.statusCode || 500;
            const errorMessage = error.message || "Internal Server Error";
            res.status(statusCode).json({
                success: false,
                error: errorMessage
            });
        }
    };
};

export default asyncHandler;


// IN ABOVE Usage of Promise.resolve:
//                                   Using Promise.resolve: Ensures that any function (synchronous or asynchronous) passed to asyncHandler is treated as a promise.Async functions and Promises: Async functions in JavaScript always return a promise.When you await an async function, you're effectively handling the promise it returns.Error handling with await: You can use try-catch blocks to handle resolved and rejected promises without the need for .then and .catch.


// const asyncHandler = (fn) =>async (req,res,next) => {

      //     try {

      //         await fn(req,res,next)

      //     } catch (error) {

      //         res.status(err.code || 500).json({

      //             message: error.message,

      //             success:false,

      //         })

      //     }

      // }







    //   const asyncHandler = (requestHandler) => {

    //       (req,res,next) => {

    //           Promise.resolve(requestHandler(req, res, next))

    //               .catch((err)=>next(err))

    //       }

    //   }




    //  export{asyncHandler}










































































































      // //instead of writing async await and then catch we can use asyncHandler which just wraps the async function and return it as a function

      // means if the input function is




      // const getUsers = asyncHandler(async (req, res, next) => {

      //     const users = await User.find();

      //     res.json({ success: true, data: users });

      // });




      // with the given below async handler

      // const asyncHandler = (fn) => async (req, res, next) => {  // if the function body consists of a single expression (without curly braces {}), it's implicitly returned

      //     try {

      //         await fn(req, res, next)

      //     } catch (error) {

      //         res.status(err.code || 500).json({

      //             message: error.message,

      //             success: false,

      //         })

      //     }

      // }







      // ' then the wrpped or the returned function would look like

      // const getUsers= async (req, res, next) => {

      //     try {

      //         const users = await User.find();

      //         res.json({ success: true, data: users });

      //     } catch (error) {

      //         res.status(err.code || 500).json({

      //             message: error.message,

      //             success: false,

      //         });

      //     }

      // }










      // const getUsers = asyncHandler(function (req, res, next) {

      //     const users = await User.find();

      //     res.json({ success: true, data: users });

      // });

      // const asyncHandler = function (fn) {

      //     return async function (req, res, next) {

      //         try {

      //             await fn(req, res, next);

      //         } catch (error) {

      //             res.status(error.code || 500).json({

      //                 message: error.message,

      //                 success: false,

      //             });

      //         }

      //     };

      // };

      // const getUsers = async function (req, res, next) {

      //     try {

      //         const users = await User.find();

      //         res.json({ success: true, data: users });

      //     } catch (error) {

      //         res.status(err.code || 500).json({

      //             message: error.message,

      //             success: false,

      //         });

      //     }

      // };































      // const asyncHandler = () => { }



















      // export { asyncHandler }




      // const asyncHandler = () => { }

      // const asyncHandler = (func) => { () => { } }

      // const asyncHandler = (func) => { async () => { } }

      // const asyncHandler = (func) => async () => { }




      // const asyncHandler = (fn) =>async (req,res,next) => {

      //     try {

      //         await fn(req,res,next)

      //     } catch (error) {

      //         res.status(err.code || 500).json({

      //             message: error.message,

      //             success:false,

      //         })

      //     }

      // }







      // so now we dont need to write the connectDB function like this in the db/indexed.js 

      // 'const connectDB = async () => {

      // try {

      //     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

      //     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`)

      // }

      // catch (error) {




      //     console.log("Mongodb connection error  ", error)

      //     process.exit(1)

      // }

      // }'

// const asyncHandler = (fn) =>async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             message: error.message,
//             success:false,
//         })
//     }
// }


// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next))
//             .catch((err) => next(err))
//     }
// }

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
