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
    image: "/characters/1.jfif",
    description: "The main protagonist of Solo Leveling, also known as the King of Shadows and the Weakest Hunter of All Mankind. Originally an E-Rank hunter, he gained the unique ability to level up infinitely through the System after being chosen as its Player. He eventually became the second Shadow Monarch, inheriting the powers of Ashborn, making him the strongest hunter in the world."
  },
  {
    name: "Lloyd Frontera",
    image: "/characters/2.jfif",
    description: "The main character from 'The Legendary Moonlight Sculptor'. Born into a poor family, he uses his gaming skills to change his destiny. Known for his exceptional sculpting ability in the virtual reality game 'Lloyd' and his strategic mind. He transforms his in-game wealth into real-world success."
  },
  {
    name: "Gun Park",
    image: "/characters/3.jfif",
    description: "A character from 'Lookism'. Park Jong-gun, also known as Gun Park, is a legendary figure in the underground fighting world. He is the founder of the Workers and one of the most powerful fighters in the series, known for his incredible strength and mastery of various martial arts. He is always seen wearing glasses and is known as the 'White Demon' or Shiro Oni."
  },
  {
    name: "Daniel Park",
    image: "/characters/4.jfif",
    description: "The main protagonist of 'Lookism'. Daniel Park is a bullied high school student who discovers a second body - a handsome alter-ego that allows him to navigate the social hierarchy of his school. He uses this ability to fight against injustice and uncover the truth behind the mysterious 'Lookism' phenomenon."
  },
  {
    name: "Thorfinn",
    image: "/characters/5.jfif",
    description: "The main protagonist of 'Vinland Saga'. Thorfinn is a young Icelandic warrior seeking revenge for his father's death at the hands of Askeladd. Through his journey, he evolves from a bloodthirsty warrior seeking vengeance to a man seeking a peaceful life and purpose. He eventually becomes known as Karlsefni and seeks to create a peaceful colony in Vinland."
  },
  {
    name: "Cale Henituse",
    image: "/characters/6.jfif",
    description: "The main protagonist of 'Omniscient Reader's Viewpoint'. Originally a failing young master of a noble family, he becomes the key figure in the novel 'The Birth of a Hero' after the world transforms into a reality. His calm demeanor and strategic thinking make him a formidable force. He is known as the 'Commander of the Silver Shield' and later becomes a powerful entity."
  },
  {
    name: "Saitama",
    image: "/characters/7.jfif",
    description: "The main protagonist of 'One-Punch Man'. Saitama is a hero who has become so powerful that he can defeat any opponent with a single punch. Despite his incredible power, he struggles with boredom and seeks worthy opponents. He became a hero for fun and maintains a laid-back personality. He is known as 'Caped Baldy' and currently holds A-Class Rank 39 in the Hero Association."
  },
  {
    name: "Rimuru Tempest",
    image: "/characters/8.jfif",
    description: "The main protagonist of 'That Time I Got Reincarnated as a Slime'. Originally a human salaryman named Satoru Mikami, he is reincarnated as a slime in a fantasy world. Through his unique abilities like 'Predator' and 'Great Sage', he builds a powerful nation and becomes a demon lord. He eventually evolves into a True Dragon and becomes one of the strongest beings in the Tensura universe."
  },
  {
    name: "Gojo Satoru",
    image: "/characters/9.jfif",
    description: "A main character from 'Jujutsu Kaisen'. Gojo Satoru is a special grade jujutsu sorcerer and the teacher at Tokyo Metropolitan Curse Technical High School. Known as the strongest jujutsu sorcerer in the world, he is famous for his Six Eyes technique and limitless cursed energy. He is the first person in 400 years to inherit both Limitless and Six Eyes."
  },
  {
    name: "Keyaru",
    image: "/characters/10.jfif",
    description: "The main protagonist of 'Redo of Healer'. Originally a kind healer who was abused, addicted to drugs, and enslaved by kingdom royalty, he uses his healing magic to go back four years in time to take sadistic vengeance on his abusers. He transforms into a manipulative, powerful strategist who remakes his life as a dark anti-villain."
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
              <strong>Full Name:</strong> Mark Angelo Dela Cruz
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
