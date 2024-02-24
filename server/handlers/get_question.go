package handlers

import (
	"net/http"
	"os"
	"qa-game/utils"

	"github.com/gin-gonic/gin"
)

var Questions []string = []string{}

func GetQuestion(c *gin.Context) {
	// check if the file exists
	_, err := os.Stat("./docs/questions.txt")
	if os.IsNotExist(err) {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "upload file before the game start",
		})
		return
	}
	// check if the list is empty and load the questions from the file
	if len(Questions) == 0 {
		fileQuestions := &Questions
		*fileQuestions = utils.FileReader("./docs/questions.txt")
	}
	c.JSON(http.StatusOK, gin.H{
		"question": utils.Print(&Questions),
	})
}
