package handlers

import (
	"qa-game/utils"

	"github.com/gin-gonic/gin"
)

func RealoadGame(c *gin.Context) {
	// reload the game by getting the questions from the file one more time
	fileQuestions := &Questions
	*fileQuestions = utils.FileReader("./docs/questions.txt")
	c.JSON(200, gin.H{
		"message": "le jeu a été rechargé avec succès",
	})
}
