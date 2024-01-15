// server/index.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3011;
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
// CORS
app.use(cors())

// Handle GET requests to /test API route
app.get("/test", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// GET profile
app.get("/profile", async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
       where: {
         id: 1
       },
       include: {
         Social: true,
         Strength: true,
       }
    });

    res.json(profile)
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({
      message: "Something went wrong",
    })
  } finally {
    await prisma.$disconnect();
  }
});

// GET cv
app.get("/cv", async (req, res) => {
  try {
    const cvData = await prisma.profile.findUnique({
      where: {
        id: 1
      },
      include: {
        Education: {
          orderBy: {
            endYear: "desc"
          }
        },
        Experience: {
          orderBy: {
            endDate: "desc"
          }
        },
        Certification: {
          orderBy: {
            earnedDate: "desc"
          }
        }
      }
    });

    res.json({
      Education: cvData.Education,
      Experience: cvData.Experience,
      Certification: cvData.Certification
    });
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({
      message: "Something went wrong",
    })
  } finally {
    await prisma.$disconnect();
  }
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});