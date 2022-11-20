import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import jwt from "express-jwt";
import { expressJwtSecret } from "jwks-rsa";
import { appOrigin as _appOrigin, domain, audience as _audience } from "./src/auth_config.json";

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = _appOrigin || `http://localhost:${appPort}`;

if (!domain ||
    !_audience ||
    _audience === "YOUR_API_IDENTIFIER"
) {
    console.log(
        "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
    );

    process.exit();
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = jwt({
    secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${domain}/.well-known/jwks.json`,
    }),

    audience: _audience,
    issuer: `https://${domain}/`,
    algorithms: ["RS256"],
});

app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your access token was successfully validated!",
    });
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));