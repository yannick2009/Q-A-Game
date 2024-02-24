package main

import (
	"qa-game/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// create server
	server := gin.Default()
	// middleware
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"}
	server.Use(cors.New(config))
	// routes
	server.POST("/upload", handlers.UploadFile)
	server.GET("/question", handlers.GetQuestion)
	server.GET("/reload", handlers.RealoadGame)
	// run server
	server.Run(":8080")
}
