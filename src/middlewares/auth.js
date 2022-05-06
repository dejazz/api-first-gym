import jwt from "jsonwebtoken"
export const isAuthenticated = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if(!authorization){
        res.status(401).json({"error":"nenhum token foi passado"})
    }
    const [type,token] = authorization.split(" ")

    jwt.verify(token,process.env.SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).send({error:"Token invalid"})
        }
        req.userId = decoded.id
        return next()
    })

    
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: "token inválido!" });
  }
};
