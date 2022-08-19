import {
  Slider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Button,
} from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const canvasRef = useRef(null);
  // const imgRef = useRef(null);

  const [avatar, setAvatar] = useState([
    "1muscle_normal",
    "2root_bald",
    "3style_hat",
  ]);
  console.log(avatar);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 234;
    canvas.height = 214;
    ctx.filter = `hue-rotate(${color}deg)`;
    avatar.forEach((pr) => {
      let pos = [0, 0];
      const filtered_part = pr
        .match(/_[^_]+/g)
        .join()
        .replace("_", "");

      switch (filtered_part) {
        case "hat":
          pos = [(canvas.width - 93) / 2, (canvas.height - 55) / 2];
          break;
        case "bald":
          pos = [(canvas.width - 93) / 2, (canvas.height - 12) / 2];
          break;
        case "megamind":
          pos = [(canvas.width - 103) / 2, (canvas.height - 211) / 2];
          break;
        case "normal":
          pos = [(canvas.width - 151) / 2, canvas.height - 60];
          break;
        case "steroid":
          pos = [0, canvas.height - 60];
          break;
        case "skinny":
          pos = [(canvas.width - 92) / 2, canvas.height - 60];
          break;
        default:
          break;
      }

      const img = new Image();
      img.onload = function () {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, pos[0], pos[1], img.width, img.height);
      };
      img.src = `/assets/${filtered_part}.png`;
    });
  }, [color, avatar]);

  const handleColorChange = (_, newValue) => setColor(newValue);

  const handleAvatarChange = (e) => {
    if (e.target.value === "bald") {
      setAvatar(
        [
          ...avatar.filter(
            (part) => !part.includes(e.target.name) && !part.includes("style")
          ),
          `${e.target.name}_${e.target.value}`,
        ].sort()
      );
    } else {
      setAvatar(
        [
          ...avatar.filter(
            (part) => !part.includes(e.target.name)
          ),
          `${e.target.name}_${e.target.value}`,
        ].sort()
      );
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "climbby_avatar.png";
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100/60 to-orange-100/60 flex justify-center items-center h-screen font-sans">
      <div className="grid">
        <canvas ref={canvasRef} />

        <FormControl>
          <FormLabel id="slider-form-label">Color</FormLabel>
          <Slider
            aria-labelledby="slider-form-label"
            defaultValue={0}
            valueLabelDisplay="auto"
            max={359}
            onChange={handleColorChange}
          />

          <FormLabel id="radio-buttons-style-label">Style</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-style-label"
            defaultValue="hat"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="bald"
              name="2root"
              control={<Radio onClick={handleAvatarChange} />}
              label="Bald"
            />
            <FormControlLabel
              value="hat"
              name="3style"
              control={<Radio onClick={handleAvatarChange} />}
              label="Hat"
            />
            <FormControlLabel
              value="megamind"
              name="3style"
              control={<Radio onClick={handleAvatarChange} />}
              label="Megamind"
            />
          </RadioGroup>

          <FormLabel id="radio-buttons-muscle-label">Muscle</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-muscle-label"
            defaultValue="normal"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="normal"
              name="1muscle"
              control={<Radio onClick={handleAvatarChange} />}
              label="Normal"
            />
            <FormControlLabel
              value="skinny"
              name="1muscle"
              control={<Radio onClick={handleAvatarChange} />}
              label="Skinny"
            />
            <FormControlLabel
              value="steroid"
              name="1muscle"
              control={<Radio onClick={handleAvatarChange} />}
              label="Steroid"
            />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          endIcon={<FileDownload />}
          onClick={handleDownload}
        >
          Download
        </Button>
      </div>
    </div>
  );
}
