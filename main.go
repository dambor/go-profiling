package main

import (
	gop "go-profiling/ascii"
	"net/http"
)

func main() {
	http.HandleFunc("/", gop.PrintAscii)
	http.ListenAndServe(":8080", nil)

}
