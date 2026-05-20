
import asyncio, base64, os, uuid
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
API_KEY = os.getenv("EMERGENT_LLM_KEY")
MODEL = "gemini-3.1-flash-image-preview"
OUT = Path("/app/frontend/public/generated")

PROMPT = (
    "Ultra photorealistic cinematic luxury automotive hero scene, 21:9 widescreen. "
    "Three pristine glossy jet-black luxury vehicles displayed together on a single large "
    "glowing golden circular light-ring platform at night: from LEFT to RIGHT — "
    "(1) a black Audi RS Q8 SUV on the left side (front 3/4 view angled slightly right), "
    "(2) a black Mercedes-Benz S-Class W223 sedan centered as the hero (front view, "
    "slightly larger and more prominent, headlights on, chrome three-pointed-star grille gleaming), "
    "(3) a black Range Rover Autobiography SUV on the right side (front 3/4 view angled slightly left). "
    "All three cars are parked on a polished dark obsidian floor emitting a luminous gold ring of light "
    "beneath them, with soft volumetric orange-gold glow radiating outward. "
    "Background: iconic Dubai skyline at golden sunset hour with Burj Khalifa and downtown towers "
    "bathed in warm amber haze, dark moody cinematic atmosphere, golden dust particles in the air. "
    "Color palette: deep charcoal black, rich amber gold (#D4AF37), bronze highlights. "
    "Showroom-perfect automotive advertising quality, cinematic depth of field, subtle film grain. "
    "Generous dark negative space on the LEFT side of the frame for large headline text overlay. "
    "No people, no text, no watermarks."
)


async def main():
    chat = LlmChat(
        api_key=API_KEY,
        session_id=f"hero-all-{uuid.uuid4()}",
        system_message="You are an expert luxury automotive advertising image generator.",
    )
    chat.with_model("gemini", MODEL).with_params(modalities=["image", "text"])
    text, images = await chat.send_message_multimodal_response(UserMessage(text=PROMPT))
    if not images:
        print("NO IMAGE:", str(text)[:160])
        return
    out = OUT / "hero-all-cars.png"
    out.write_bytes(base64.b64decode(images[0]["data"]))
    print(f"saved {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
