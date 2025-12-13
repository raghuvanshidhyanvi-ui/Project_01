// import jwt from "jsonwebtoken"

// const authMiddleware =  async(req,res , next)=>{
//     const {token} = req.headers;
//     if(!token){
//         return res.json({success : false , message : "Not Authorized login agaian"})
//     }

//  try{
//     const token_decode = jwt.verify(token,process.env.JWT_SECRET)
//     req.body.userId = token_decode.id;
//     next();

//  }
//  catch(error){
//     console.log(error)
//     res.json({success : false , message : "error"})

//  }

// }

// export default authMiddleware;


import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    // SUPPORT both `token` and `authorization`
    const token = req.headers.token || req.headers.authorization;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized, login again" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
