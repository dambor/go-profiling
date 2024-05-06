import http from "k6/http";

export default function() {
    http.get("http://localhost:8080?i=1&j=2");
    http.get("http://localhost:8080?i=2&j=1");
    http.get("http://localhost:8080?i=2&j=2");
}