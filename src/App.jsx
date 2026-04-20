import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  IconButton,
  Collapse,
  Paper,
  Grid
} from '@mui/material';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExpandMore, 
  ExpandLess 
} from '@mui/icons-material';

const characters = [
  {
    name: "Sung Jin Woo",
    image: "https://static.wikia.nocookie.net/solo-leveling/images/8/8b/Jinwoo4.jpg/revision/latest?cb=20250411080707",
    description: "The main protagonist of Solo Leveling, also known as the King of Shadows and the Weakest Hunter of All Mankind. Originally an E-Rank hunter, he gained the unique ability to level up infinitely through the System after being chosen as its Player. He eventually became the second Shadow Monarch, inheriting the powers of Ashborn, making him the strongest hunter in the world."
  },
  {
    name: "Lloyd Frontera",
    image: "https://i.pinimg.com/736x/8a/4a/6e/8a4a6e91f1c9e7d0e8f8b0c0e0f0e0f.jpg",
    description: "The main character from 'The Legendary Moonlight Sculptor'. Born into a poor family, he uses his gaming skills to change his destiny. Known for his exceptional sculpting ability in the virtual reality game 'Lloyd' and his strategic mind. He transforms his in-game wealth into real-world success."
  },
  {
    name: "Gun Park",
    image: "https://i.pinimg.com/736x/2a/3b/4c/2a3b4c1a2b3c4d5e6f7a8b9c0d1e2f3.jpg",
    description: "A character from 'Lookism'. Park Hyejin, also known as Gun Park, is a legendary figure in the underground fighting world. He is the founder of the Workers and one of the most powerful fighters in the series, known for his incredible strength and mysterious background."
  },
  {
    name: "Daniel Park",
    image: "https://i.pinimg.com/736x/1a/2b/3c/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6.jpg",
    description: "The main protagonist of 'Lookism'. Daniel Park is a bullied high school student who discovers a second body - a handsome alter-ego that allows him to navigate the social hierarchy of his school. He uses this ability to fight against injustice and uncover the truth behind the mysterious 'Lookism' phenomenon."
  },
  {
    name: "Thorfinn",
    image: "https://i.pinimg.com/736x/3a/4b/5c/3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8.jpg",
    description: "The main protagonist of 'Vinland Saga'. Thorfinn is a young Icelandic warrior seeking revenge for his father's death at the hands of Askeladd. Through his journey, he evolves from a bloodthirsty warrior seeking vengeance to a man seeking a peaceful life and purpose."
  },
  {
    name: "Cale Henituse",
    image: "https://i.pinimg.com/736x/4a/5b/6c/4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9.jpg",
    description: "The main protagonist of 'Omniscient Reader's Viewpoint'. Originally a failing young master of a noble family, he becomes the key figure in the novel 'The Birth of a Hero' after the world transforms into a reality. His calm demeanor and strategic thinking make him a formidable force."
  },
  {
    name: "Saitama",
    image: "https://i.pinimg.com/736x/5a/6b/7c/5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0.jpg",
    description: "The main protagonist of 'One-Punch Man'. Saitama is a hero who has become so powerful that he can defeat any opponent with a single punch. Despite his incredible power, he struggles with boredom and seeks worthy opponents. He became a hero for fun and maintains a laid-back personality."
  },
  {
    name: "Rimuru Tempest",
    image: "https://i.pinimg.com/736x/6a/7b/8c/6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1.jpg",
    description: "The main protagonist of 'That Time I Got Reincarnated as a Slime'. Originally a human salaryman, he is reincarnated as a slime in a fantasy world. Through his unique abilities like 'Predator' and 'Great Sage', he builds a powerful nation and becomes a demon lord."
  },
  {
    name: "Gojo Satoru",
    image: "https://i.pinimg.com/736x/7a/8b/9c/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2.jpg",
    description: "A main character from 'Jujutsu Kaisen'. Gojo Satoru is a special grade jujutsu sorcerer and the teacher at Tokyo Metropolitan Curse Technical High School. Known as the strongest jujutsu sorcerer in the world, he is famous for his Six Eyes technique and limitless cursed energy."
  },
  {
    name: "Keyaru",
    image: "https://i.pinimg.com/736x/8a/9b/0c/8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3.jpg",
    description: "The main protagonist of 'The Heroic Legend of Arslan'. Keyaru is a young prince who becomes a legendary hero after his kingdom is conquered. He possesses exceptional combat skills and a strong sense of justice, leading him on a journey to reclaim his homeland and unite the kingdoms."
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % characters.length);
    setExpanded(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + characters.length) % characters.length);
    setExpanded(false);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const currentCharacter = characters[currentIndex];

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        py: 4,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      <Container maxWidth="md">
        {/* Header Section */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 3, 
            mb: 4, 
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            align="center" 
            sx={{ 
              color: '#fff',
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Legendary Fictional Characters
          </Typography>
          
          <Box sx={{ textAlign: 'center', color: '#fff' }}>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              <strong>Full Name:</strong> Angenoise D. Pacleb
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              <strong>Subject:</strong> CMSC 100 - Web Development
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              <strong>Section:</strong> BSCS 2-1
            </Typography>
          </Box>
        </Paper>

        {/* Character Card */}
        <Card 
          sx={{ 
            maxWidth: 500, 
            mx: 'auto',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <CardMedia
            component="img"
            height="350"
            image={currentCharacter.image}
            alt={currentCharacter.name}
            sx={{ objectFit: 'cover' }}
          />
          
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                color: '#1a1a2e',
                mb: 2
              }}
            >
              {currentCharacter.name}
            </Typography>
            
            <Collapse in={expanded}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  mb: 2,
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}
              >
                {currentCharacter.description}
              </Typography>
            </Collapse>
            
            <Button 
              onClick={handleToggle}
              endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
              sx={{ 
                color: '#0f3460',
                fontWeight: 'bold'
              }}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </Button>
          </CardContent>
        </Card>

        {/* Navigation Controls */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            mt: 4,
            gap: 2
          }}
        >
          <IconButton 
            onClick={handlePrevious}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
              }
            }}
          >
            <ChevronLeft sx={{ fontSize: 32 }} />
          </IconButton>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#fff',
              minWidth: '120px',
              textAlign: 'center'
            }}
          >
            {currentIndex + 1} / {characters.length}
          </Typography>
          
          <IconButton 
            onClick={handleNext}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
              }
            }}
          >
            <ChevronRight sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* Character Indicators */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            gap: 1,
            mt: 3
          }}
        >
          {characters.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setExpanded(false);
              }}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? '#e94560' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: index === currentIndex ? '#e94560' : 'rgba(255, 255, 255, 0.5)',
                  transform: 'scale(1.2)'
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;