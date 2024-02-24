package handlers

import (
	"net/http"
	"qa-game/utils"

	"github.com/gin-gonic/gin"
)

func UploadFile(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "file not found",
		})
		return
	}
	c.SaveUploadedFile(file, "./docs/questions.txt")
	fileQuestions := &Questions
	*fileQuestions = utils.FileReader("./docs/questions.txt")
	c.JSON(http.StatusOK, gin.H{
		"message": "file uploaded successfully"})
}
