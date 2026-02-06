export const courseData = {
  title: "Python for Gamers",
  description: "Learn Python by building awesome games — made for middle schoolers who love gaming!",
  chapters: [
    {
      id: 1,
      title: "Welcome, Gamer!",
      lessons: [
        {
          id: "1-1",
          title: "Why Python + Games?",
          completed: false,
          content: {
            description: "Discover how Python powers real games and why it's the perfect first language for future game developers!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand why Python is amazing for game development, write your first Python code, and see your output on screen.

Ever wondered how your favorite games are made? Behind every game — from Minecraft to Fortnite — there's **code** making everything work. The characters move because of code. Enemies attack because of code. Items drop because of code. And one of the best languages to start learning that code is **Python**.

Python is special because it reads almost like English. While other languages need weird symbols and brackets everywhere, Python keeps things clean and simple. That's why it's the #1 language taught in schools and the #1 language used by beginners worldwide. But don't let "beginner-friendly" fool you — Python is used by NASA, Google, Netflix, Instagram, and Spotify for real, production software.`
              },
              {
                type: "heading",
                level: 2,
                content: "Games Made with Python"
              },
              {
                type: "list",
                items: [
                  "**Minecraft** — Uses Python for mods, education edition, and plugins!",
                  "**Battlefield 2** — Core game logic written in Python",
                  "**Eve Online** — Massive space MMO with Python backend",
                  "**Civilization IV** — AI and game logic powered by Python",
                  "**Frets on Fire** — Guitar Hero clone built entirely in Python",
                  "**Mount & Blade** — Module system uses Python scripting",
                  "**Toontown Online** — Disney MMO built with Python"
                ]
              },
              {
                type: "tip",
                content: "Python is used by NASA to control Mars rovers, by Google to power their search engine, and by Netflix to recommend shows. Learning it doesn't just help with games — it opens doors to literally every tech career! 🚀"
              },
              {
                type: "heading",
                level: 2,
                content: "Setting Up Python"
              },
              {
                type: "code",
                language: "text",
                filename: "setup_guide.txt",
                code: "Option 1: Replit (EASIEST — No Install!)\n1. Go to replit.com\n2. Create a free account\n3. Click '+ Create Repl'\n4. Choose 'Python'\n5. Start coding in your browser! ✅\n\nOption 2: Python.org (Local Install)\n1. Go to python.org/downloads\n2. Download Python 3.12+ (latest version)\n3. Run installer — CHECK 'Add to PATH'! ✅\n4. Open Terminal/Command Prompt\n5. Type: python --version\n6. Should show: Python 3.12.x\n\nOption 3: VS Code (Professional Setup)\n1. Install Python from python.org\n2. Install VS Code from code.visualstudio.com\n3. Install the 'Python' extension in VS Code\n4. Create a new file: game.py\n5. Write code and press F5 to run!"
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Python Code!"
              },
              {
                type: "text",
                content: "Let's write your first program. Every coder starts here — it's a tradition:"
              },
              {
                type: "code",
                language: "python",
                filename: "hello_gamer.py",
                code: `# Your first Python program!
# Lines starting with # are comments — notes for YOU

print("Hello, Gamer! 🎮")
print("Welcome to Python!")
print("Let's make some games!")

# print() shows text on the screen
# Text must be in quotes (single or double)

print('Single quotes work too!')
print("You can use emoji: 🎯 🏆 ⚔️ 🛡️")

# Try running this code and see what happens!`
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Player Input"
              },
              {
                type: "code",
                language: "python",
                filename: "input_example.py",
                code: `# input() lets the player type something
player_name = input("What's your gamer tag? ")
print(f"Welcome, {player_name}! Let's play! 🎮")

# f-strings (the f before the quotes) let you
# put variables inside curly braces {like_this}
# They're the easiest way to mix text and variables!

favorite_game = input("What's your favorite game? ")
print(f"{player_name} loves playing {favorite_game}!")
print(f"Let's build something even cooler! 🚀")`
              },
              {
                type: "warning",
                content: "Python is CASE SENSITIVE! `print()` works, but `Print()` or `PRINT()` will cause an error. Watch your capitalization!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Write a program that prints your name, age, and favorite game on separate lines.",
                  "**Exercise 2:** Use input() to ask for a player's name and favorite weapon, then print a message using both.",
                  "**Exercise 3:** Create a mini character creator that asks for name, class (warrior/mage/rogue), and prints a character summary.",
                  "**Exercise 4:** Print ASCII art using multiple print() statements (try making a sword or shield!).",
                  "**Exercise 5:** Use \\n inside a print to make text on multiple lines: `print(\"Line 1\\nLine 2\\nLine 3\")`"
                ]
              },
              {
                type: "checkpoint",
                content: "Write a program that asks for the player's name and favorite game, then prints a personalized welcome message using f-strings!"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Variables = Game Stats",
          completed: false,
          content: {
            description: "Learn variables by thinking about them like character stats in your favorite RPG! Store health, mana, gold, and more.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create and modify variables, understand data types, and use f-strings to display game information beautifully.

In every RPG, your character has **stats** — health points, mana, level, gold, experience. In Python, we store these values in **variables**. A variable is just a named container that holds data. You give it a name, put something inside, and use it whenever you need that data.

Variables are the single most important concept in programming. Master them and everything else becomes easier.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Variables"
              },
              {
                type: "code",
                language: "python",
                filename: "player_stats.py",
                code: `# Creating variables is simple: name = value
player_name = "DragonSlayer99"
health = 100
mana = 50
level = 1
gold = 25
is_alive = True

# Display with f-strings (the best way!)
print(f"⚔️ Character Sheet for {player_name}")
print(f"{'='*35}")
print(f"❤️  Health: {health}")
print(f"💙 Mana:   {mana}")
print(f"⭐ Level:  {level}")
print(f"💰 Gold:   {gold}")
print(f"🏃 Alive:  {is_alive}")

# Variables can change!
health = 75  # Took some damage
gold = gold + 10  # Found some gold!
level = level + 1  # Level up!

print(f"\\nAfter adventuring:")
print(f"❤️  Health: {health}")
print(f"💰 Gold:   {gold}")
print(f"⭐ Level:  {level}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Data Types — The Four Main Types"
              },
              {
                type: "code",
                language: "python",
                filename: "data_types.py",
                code: `# STRINGS — Text (always in quotes)
weapon_name = "Diamond Sword"
player_class = 'Warrior'  # single quotes work too
battle_cry = """For glory
and honor!"""  # triple quotes for multi-line

# INTEGERS — Whole numbers (no decimal point)
health = 100
damage = 25
coins = 0

# FLOATS — Decimal numbers
crit_chance = 0.15    # 15% chance
speed = 16.5
pi = 3.14159

# BOOLEANS — True or False (capital T and F!)
is_alive = True
has_key = False
can_fly = True

# Check what type something is:
print(type(weapon_name))  # <class 'str'>
print(type(health))       # <class 'int'>
print(type(crit_chance))  # <class 'float'>
print(type(is_alive))     # <class 'bool'>

# CONVERTING between types:
age_text = "15"           # This is a STRING, not a number!
age_number = int(age_text)  # Now it's an integer: 15
price = float("9.99")    # String to float: 9.99
text = str(100)           # Number to string: "100"`
              },
              {
                type: "tip",
                content: "Variable names can't have spaces! Use underscores instead: `player_health` not `player health`. Also, they can't start with numbers: `weapon1` works but `1weapon` doesn't."
              },
              {
                type: "heading",
                level: 2,
                content: "Modifying Variables"
              },
              {
                type: "code",
                language: "python",
                filename: "modify_stats.py",
                code: `# Variables can change — that's what makes games dynamic!

health = 100
print(f"Starting HP: {health}")

# Regular update
health = health - 25  # Took 25 damage
print(f"After hit: {health}")

# Shorthand operators (same thing, less typing!)
health -= 10   # Same as: health = health - 10
print(f"After poison: {health}")

gold = 0
gold += 50     # Same as: gold = gold + 50
gold += 30     # Add 30 more
print(f"Gold: {gold}")

damage = 10
damage *= 2    # Same as: damage = damage * 2 (DOUBLE DAMAGE!)
print(f"Buffed damage: {damage}")

# All shorthand operators:
# +=  add         x += 5   →  x = x + 5
# -=  subtract    x -= 5   →  x = x - 5
# *=  multiply    x *= 2   →  x = x * 2
# /=  divide      x /= 2   →  x = x / 2
# **= power       x **= 2  →  x = x ** 2
# //= floor div   x //= 3  →  x = x // 3
# %=  remainder   x %= 3   →  x = x % 3`
              },
              {
                type: "heading",
                level: 2,
                content: "Building a Character Creator"
              },
              {
                type: "code",
                language: "python",
                filename: "character_creator.py",
                code: `# A complete character creator!
print("⚔️ CHARACTER CREATOR ⚔️")
print("=" * 30)

# Get player info
name = input("Enter character name: ")
player_class = input("Choose class (Warrior/Mage/Rogue): ")

# Set stats based on class
if player_class.lower() == "warrior":
    health = 150
    mana = 30
    strength = 20
    intelligence = 5
    emoji = "⚔️"
elif player_class.lower() == "mage":
    health = 80
    mana = 150
    strength = 5
    intelligence = 25
    emoji = "🔮"
elif player_class.lower() == "rogue":
    health = 100
    mana = 60
    strength = 12
    intelligence = 12
    emoji = "🗡️"
else:
    health = 100
    mana = 50
    strength = 10
    intelligence = 10
    emoji = "🎮"

# Display character sheet
print(f"\\n{emoji} {name} the {player_class.title()}")
print(f"{'─' * 30}")
print(f"❤️  HP:           {health}")
print(f"💙 Mana:         {mana}")
print(f"💪 Strength:     {strength}")
print(f"🧠 Intelligence: {intelligence}")
print(f"\\n🎮 Adventure awaits!")`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create variables for a game weapon: name (str), damage (int), crit_chance (float), is_legendary (bool). Print them all with f-strings.",
                  "**Exercise 2:** Simulate combat: start with health=100, take 3 hits of 25 damage each using -=. Print health after each hit.",
                  "**Exercise 3:** Build a gold tracker: start at 0, add gold from 3 different sources, then spend some. Show the running total.",
                  "**Exercise 4:** Use input() to ask for a number, convert it to int(), double it, and print the result.",
                  "**Exercise 5:** Expand the character creator to include more classes and stats."
                ]
              },
              {
                type: "quiz",
                question: "What type of variable is `is_alive = True`?",
                options: [
                  { id: "a", text: "String" },
                  { id: "b", text: "Integer" },
                  { id: "c", text: "Float" },
                  { id: "d", text: "Boolean" }
                ],
                correct: "d",
                explanation: "True and False are Boolean values — perfect for yes/no or on/off situations like 'is the player alive?' Remember: True and False must be capitalized in Python!"
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "Math = Damage Calculations",
          completed: false,
          content: {
            description: "Master Python math by building damage calculators, XP systems, and gold economies. Every number in a game is math in disguise!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll use all Python math operators, build damage calculation formulas, and create an XP leveling system.

Every game runs on math. When you hit an enemy, the game calculates damage using formulas. When you gain XP, math determines when you level up. When loot drops, math decides the rarity. Understanding Python math is understanding how games work under the hood.`
              },
              {
                type: "heading",
                level: 2,
                content: "Python Math Operators"
              },
              {
                type: "code",
                language: "python",
                filename: "math_operators.py",
                code: `# All math operators you need for games!

# Basic operations
print(10 + 5)    # Addition: 15
print(10 - 5)    # Subtraction: 5
print(10 * 5)    # Multiplication: 50
print(10 / 3)    # Division: 3.333... (always gives float!)
print(10 // 3)   # Floor division: 3 (rounds DOWN to integer)
print(10 % 3)    # Modulo (remainder): 1
print(2 ** 10)   # Power (2^10): 1024

# Order of operations (PEMDAS!)
result = 10 + 5 * 2    # = 20, not 30! (* before +)
result = (10 + 5) * 2  # = 30 (parentheses first!)

# Practical game examples:
base_damage = 20
weapon_bonus = 15
crit_multiplier = 2
armor = 10

total_damage = (base_damage + weapon_bonus) * crit_multiplier - armor
print(f"💥 Total damage: {total_damage}")  # (20+15)*2-10 = 60`
              },
              {
                type: "heading",
                level: 2,
                content: "Damage Calculator"
              },
              {
                type: "code",
                language: "python",
                filename: "damage_calc.py",
                code: `# Complete damage calculation system! ⚔️

# Player stats
base_damage = 20
weapon_bonus = 15
strength = 12
crit_multiplier = 2.5

# Enemy stats
enemy_armor = 8
enemy_health = 100

# Calculate damage
raw_damage = base_damage + weapon_bonus + (strength * 0.5)
damage_after_armor = max(raw_damage - enemy_armor, 1)  # min 1 damage!

print(f"⚔️ COMBAT LOG")
print(f"{'='*30}")
print(f"Raw damage:     {raw_damage}")
print(f"Enemy armor:    -{enemy_armor}")
print(f"Final damage:   {damage_after_armor}")

# Critical hit!
import random
crit_roll = random.random()  # 0.0 to 1.0
if crit_roll < 0.25:  # 25% crit chance
    damage_after_armor *= crit_multiplier
    print(f"💥 CRITICAL HIT! x{crit_multiplier}")
    print(f"Critical damage: {damage_after_armor}")

# Apply damage
enemy_health -= damage_after_armor
print(f"\\nEnemy HP: {enemy_health}/{100}")

if enemy_health <= 0:
    print("🎉 Enemy defeated!")
else:
    print(f"Enemy has {enemy_health} HP remaining")`
              },
              {
                type: "heading",
                level: 2,
                content: "XP and Leveling System"
              },
              {
                type: "code",
                language: "python",
                filename: "xp_system.py",
                code: `# Experience and leveling system! 📈

current_xp = 0
level = 1
xp_per_kill = 25
kills = 12

# Calculate XP gained
xp_gained = xp_per_kill * kills
current_xp += xp_gained
print(f"XP gained: +{xp_gained}")
print(f"Total XP: {current_xp}")

# Leveling formula: 100 XP per level
# Level = XP // 100 + 1
level = current_xp // 100 + 1
xp_in_current_level = current_xp % 100
xp_needed = 100 - xp_in_current_level

print(f"\\n⭐ Level: {level}")
print(f"📊 Progress: {xp_in_current_level}/100 XP")
print(f"📈 Need {xp_needed} more XP to level up!")

# XP bar visualization!
bar_length = 20
filled = int((xp_in_current_level / 100) * bar_length)
empty = bar_length - filled
bar = "█" * filled + "░" * empty
print(f"[{bar}] {xp_in_current_level}%")`
              },
              {
                type: "tip",
                content: "The `%` (modulo) operator gives you the remainder after division. It's incredibly useful! Use it for: XP to next level (xp % 100), checking even/odd (num % 2), turn-based games (turn % num_players), and repeating patterns."
              },
              {
                type: "heading",
                level: 2,
                content: "Useful Math Functions"
              },
              {
                type: "code",
                language: "python",
                filename: "math_functions.py",
                code: `import math
import random

# Built-in functions (no import needed)
print(abs(-15))        # Absolute value: 15
print(round(3.7))      # Round: 4
print(round(3.14159, 2))  # Round to 2 decimals: 3.14
print(max(5, 10, 3))   # Biggest: 10
print(min(5, 10, 3))   # Smallest: 3

# math module
print(math.floor(3.9))  # Round DOWN: 3
print(math.ceil(3.1))   # Round UP: 4
print(math.sqrt(64))    # Square root: 8.0

# random module (ESSENTIAL for games!)
print(random.randint(1, 6))     # Roll a d6: 1-6
print(random.randint(1, 20))    # Roll a d20: 1-20
print(random.random())          # Float 0.0 to 1.0
print(random.choice(["Sword", "Shield", "Potion"]))  # Pick random item
print(random.uniform(0.5, 2.0))  # Random float in range`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Build a damage calculator that takes base_damage, weapon_bonus, and enemy_armor, then calculates final damage (minimum 1).",
                  "**Exercise 2:** Create an XP system: give the player 25 XP per kill for a random number of kills (1-20). Show their level and progress.",
                  "**Exercise 3:** Simulate rolling two 6-sided dice. Print each roll and the total. Check if it's doubles!",
                  "**Exercise 4:** Build a gold economy: start with 100 gold, buy items of random prices (10-50), show remaining gold after each purchase.",
                  "**Exercise 5:** Create a critical hit system: 20% chance for 2x damage, 5% chance for 3x damage. Test it 10 times."
                ]
              },
              {
                type: "checkpoint",
                content: "Create a complete damage formula that includes base damage, weapon bonus, strength scaling, armor reduction, and a random critical hit chance. Print a formatted combat log!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Making Decisions",
      lessons: [
        {
          id: "2-1",
          title: "If Statements = Game Logic",
          completed: false,
          content: {
            description: "Master if/elif/else by coding game decisions — health checks, loot drops, level requirements, and combat outcomes!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll write if/elif/else chains, use all comparison operators, and build real game logic like loot drop systems and health checks.

Games are FULL of decisions: Is the player's health zero? Did they collect the key? Can they afford the item? Is this enemy stronger than them? ALL of these are **if statements** — the code checks a condition and does different things based on whether it's true or false.

Without if statements, every game would play exactly the same way every time. With them, games become dynamic, unpredictable, and fun.`
              },
              {
                type: "heading",
                level: 2,
                content: "Basic If Statement"
              },
              {
                type: "code",
                language: "python",
                filename: "if_basics.py",
                code: `# If statement — do something ONLY when a condition is true
health = 25

if health < 50:
    print("⚠️ Low health! Find a potion!")

# If health were 75, NOTHING would print
# because 75 < 50 is False

# If-Else — two different paths
health = 80
if health > 50:
    print("💪 You're doing great!")
else:
    print("⚠️ Watch your health!")

# If-Elif-Else — multiple paths
health = 25
if health > 75:
    print("💚 Healthy!")
elif health > 50:
    print("💛 Okay, but be careful")
elif health > 25:
    print("🟠 Getting dangerous...")
elif health > 0:
    print("🔴 CRITICAL! Find healing NOW!")
else:
    print("💀 You are dead!")`
              },
              {
                type: "warning",
                content: "Python uses INDENTATION (4 spaces) to define what's inside an if block. This isn't optional — it's how Python works! If your indentation is wrong, you'll get an IndentationError."
              },
              {
                type: "heading",
                level: 2,
                content: "Comparison Operators"
              },
              {
                type: "code",
                language: "python",
                filename: "comparisons.py",
                code: `# All comparison operators
health = 100
level = 15
required_level = 10

print(health == 100)    # Equal to: True
print(health != 50)     # Not equal: True
print(health > 50)      # Greater than: True
print(health < 150)     # Less than: True
print(health >= 100)    # Greater or equal: True
print(level <= 20)      # Less or equal: True

# String comparisons
player_class = "mage"
print(player_class == "mage")     # True
print(player_class == "Mage")     # False! (case matters)
print(player_class != "warrior")  # True

# 'in' operator — check if something is IN a collection
inventory = ["Sword", "Shield", "Potion"]
print("Sword" in inventory)       # True
print("Bow" in inventory)         # False
print("Bow" not in inventory)     # True`
              },
              {
                type: "heading",
                level: 2,
                content: "Loot Drop System"
              },
              {
                type: "code",
                language: "python",
                filename: "loot_system.py",
                code: `import random

# Random loot drop based on rarity! 🎁
drop_chance = random.randint(1, 100)
print(f"🎲 Drop roll: {drop_chance}")

if drop_chance <= 2:
    print("✨ MYTHIC DROP! Dragon's Breath Sword!")
    rarity = "Mythic"
elif drop_chance <= 8:
    print("🌟 LEGENDARY! Enchanted Diamond Armor!")
    rarity = "Legendary"
elif drop_chance <= 20:
    print("💜 EPIC! Shadow Cloak!")
    rarity = "Epic"
elif drop_chance <= 45:
    print("💙 RARE! Steel Longsword!")
    rarity = "Rare"
elif drop_chance <= 75:
    print("💚 UNCOMMON! Leather Boots")
    rarity = "Uncommon"
else:
    print("⬜ COMMON! Wooden Stick")
    rarity = "Common"

print(f"\\nItem rarity: {rarity}")
print(f"Better luck next time!" if rarity == "Common" else "Nice drop! 🎉")`
              },
              {
                type: "heading",
                level: 2,
                content: "Combining Conditions with and, or, not"
              },
              {
                type: "code",
                language: "python",
                filename: "combined_conditions.py",
                code: `# AND — ALL conditions must be true
gold = 150
level = 10
item_price = 100
required_level = 5

if gold >= item_price and level >= required_level:
    print("✅ Purchase successful!")
    gold -= item_price
else:
    if gold < item_price:
        print(f"❌ Need {item_price - gold} more gold!")
    if level < required_level:
        print(f"❌ Need level {required_level} (you're {level})")

# OR — at least ONE must be true
is_premium = False
level = 25

if is_premium or level >= 20:
    print("🎁 Bonus content unlocked!")

# NOT — flips True/False
is_banned = False
if not is_banned:
    print("✅ Welcome to the server!")

# Complex combinations
has_key = True
has_lockpick = False
strength = 18

if has_key or has_lockpick or strength >= 20:
    print("🚪 Door opened!")
else:
    print("🔒 Door is locked. Find a key, lockpick, or get stronger!")`
              },
              {
                type: "tip",
                content: "Use parentheses to make complex conditions clearer! `if (gold >= price and level >= req) or is_premium:` is much easier to read and less error-prone."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Write a health checker that prints different status messages for health ranges: 76-100, 51-75, 26-50, 1-25, 0.",
                  "**Exercise 2:** Create a loot drop system with at least 6 rarity tiers using random numbers.",
                  "**Exercise 3:** Build a shop that checks both gold AND level before allowing a purchase.",
                  "**Exercise 4:** Write a dungeon door system: player needs (key AND level 10) OR (lockpick AND level 15) OR (strength >= 20).",
                  "**Exercise 5:** Create a grade calculator for a 'Combat Academy' that gives S/A/B/C/D/F ranks based on a score."
                ]
              },
              {
                type: "quiz",
                question: "What prints if health = 75?\n\nif health > 80:\n    print('A')\nelif health > 50:\n    print('B')\nelse:\n    print('C')",
                options: [
                  { id: "a", text: "A" },
                  { id: "b", text: "B" },
                  { id: "c", text: "C" },
                  { id: "d", text: "B and C" }
                ],
                correct: "b",
                explanation: "75 is NOT > 80 (skip A). But 75 IS > 50, so B prints. Python runs the FIRST true condition and skips the rest."
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Match Your Way — Pattern Matching",
          completed: false,
          content: {
            description: "Clean up messy if-chains with Python's match statement, nested conditions, and ternary expressions for concise game logic!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll use match/case for clean multi-path logic, ternary expressions for quick conditions, and nested ifs for complex game rules.

As your games get more complex, your if/elif chains get longer. Python 3.10 introduced **match/case** (similar to switch statements in other languages) to make multi-option code cleaner. Combined with ternary expressions, you'll write more elegant game logic.`
              },
              {
                type: "heading",
                level: 2,
                content: "Match/Case (Python 3.10+)"
              },
              {
                type: "code",
                language: "python",
                filename: "match_case.py",
                code: `# Match/case — clean multi-option logic
player_class = "mage"

match player_class:
    case "warrior":
        weapon = "Greatsword"
        armor = "Plate"
        print(f"⚔️ Warrior: {weapon} + {armor}")
    case "mage":
        weapon = "Staff"
        armor = "Robes"
        print(f"🔮 Mage: {weapon} + {armor}")
    case "rogue":
        weapon = "Daggers"
        armor = "Leather"
        print(f"🗡️ Rogue: {weapon} + {armor}")
    case "ranger":
        weapon = "Longbow"
        armor = "Chainmail"
        print(f"🏹 Ranger: {weapon} + {armor}")
    case _:  # Default case (like 'else')
        weapon = "Fists"
        armor = "Clothes"
        print(f"🤷 Unknown class: {weapon} + {armor}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Ternary Expressions (One-Line If)"
              },
              {
                type: "code",
                language: "python",
                filename: "ternary.py",
                code: `# Normal if/else (3 lines):
health = 30
if health > 50:
    status = "Healthy"
else:
    status = "Wounded"

# Ternary expression (1 line — same result!):
status = "Healthy" if health > 50 else "Wounded"
print(f"Status: {status}")

# Great for game messages:
is_alive = health > 0
result = "Victory! 🎉" if is_alive else "Defeat... 💀"
print(result)

# Damage text
damage = 45
damage_text = "CRITICAL!" if damage > 40 else "Normal hit"
print(f"💥 {damage} damage — {damage_text}")

# Even nested (use sparingly — can get hard to read!)
rarity = "Legendary" if random.random() < 0.05 else "Rare" if random.random() < 0.2 else "Common"`
              },
              {
                type: "heading",
                level: 2,
                content: "Nested If Statements"
              },
              {
                type: "code",
                language: "python",
                filename: "nested_ifs.py",
                code: `# Sometimes you need ifs INSIDE ifs
player_class = "mage"
level = 15
has_spell_book = True

print(f"🎮 Checking abilities for Level {level} {player_class}...")

if player_class == "mage":
    print("🔮 You are a mage!")
    
    if level >= 10:
        print("  ✅ Fireball unlocked!")
        
        if level >= 20:
            print("  ✅ Meteor Storm unlocked!")
        else:
            print(f"  🔒 Meteor Storm at level 20 (need {20 - level} more)")
        
        if has_spell_book:
            print("  ✅ Bonus: Ancient Spells available!")
    else:
        print(f"  🔒 Fireball unlocks at level 10 (need {10 - level} more)")

elif player_class == "warrior":
    print("⚔️ You are a warrior!")
    if level >= 5:
        print("  ✅ Shield Bash unlocked!")
    if level >= 15:
        print("  ✅ Whirlwind Attack unlocked!")`
              },
              {
                type: "tip",
                content: "Don't nest more than 3 levels deep! If you find yourself writing if inside if inside if inside if, refactor into functions instead. Deep nesting makes code hard to read and maintain."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Use match/case to assign starting stats based on 5 different character classes.",
                  "**Exercise 2:** Convert 5 if/else blocks into ternary expressions for status messages.",
                  "**Exercise 3:** Build a skill tree checker using nested ifs: class → level → has prerequisite item.",
                  "**Exercise 4:** Create a quest system: different dialogue based on player's class, level, AND quest progress.",
                  "**Exercise 5:** Build an item comparison system: check two items' stats and print which is better and why."
                ]
              },
              {
                type: "checkpoint",
                content: "Create a character ability system that uses match/case for class selection, nested ifs for level requirements, and ternary expressions for status messages."
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Loops = Repeat Actions",
      lessons: [
        {
          id: "3-1",
          title: "For Loops = Farming XP",
          completed: false,
          content: {
            description: "Master for loops by farming enemies, processing inventories, and automating repetitive game tasks!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll use for loops with range(), iterate over lists, use enumerate(), and build automated game systems.

Ever grinded enemies in a game to level up? Kill, collect XP, repeat. Kill, collect XP, repeat. That's a **loop** — doing the same action over and over. In code, loops save you from writing the same thing hundreds of times. Instead of 50 lines to fight 50 enemies, you write 5 lines inside a loop.`
              },
              {
                type: "heading",
                level: 2,
                content: "Basic For Loop with range()"
              },
              {
                type: "code",
                language: "python",
                filename: "for_basics.py",
                code: `# Farming enemies for XP! 👾
total_xp = 0
xp_per_enemy = 25

print("⚔️ Starting the grind!")
for enemy_num in range(1, 6):  # 1 to 5
    total_xp += xp_per_enemy
    print(f"  Enemy {enemy_num} defeated! +{xp_per_enemy} XP (Total: {total_xp})")

print(f"\\n🎉 Grind complete! Total XP: {total_xp}")

# How range() works:
print("\\nrange() examples:")
for i in range(5):        # 0, 1, 2, 3, 4 (5 numbers starting from 0)
    print(i, end=" ")
print()

for i in range(1, 6):     # 1, 2, 3, 4, 5 (start to stop-1)
    print(i, end=" ")
print()

for i in range(0, 10, 2): # 0, 2, 4, 6, 8 (step by 2)
    print(i, end=" ")
print()

for i in range(5, 0, -1): # 5, 4, 3, 2, 1 (countdown!)
    print(i, end=" ")
print("Go!")`
              },
              {
                type: "heading",
                level: 2,
                content: "Looping Through Lists"
              },
              {
                type: "code",
                language: "python",
                filename: "list_loops.py",
                code: `# Loop through inventory! 🎒
inventory = ["Sword", "Shield", "Potion", "Key", "Map"]

print("📦 Your inventory:")
for item in inventory:
    print(f"  • {item}")

print(f"\\nTotal items: {len(inventory)}")

# With index numbers using enumerate
print("\\n📦 Inventory (numbered):")
for i, item in enumerate(inventory, 1):  # start counting from 1
    print(f"  {i}. {item}")

# Processing enemy list
enemies = [
    {"name": "Goblin", "hp": 30, "xp": 15},
    {"name": "Orc", "hp": 60, "xp": 30},
    {"name": "Dragon", "hp": 200, "xp": 100},
]

print("\\n👾 Enemies to fight:")
for enemy in enemies:
    print(f"  {enemy['name']}: {enemy['hp']} HP (worth {enemy['xp']} XP)")`
              },
              {
                type: "heading",
                level: 2,
                content: "Building a Wave Defense Game"
              },
              {
                type: "code",
                language: "python",
                filename: "wave_defense.py",
                code: `import random

# Wave defense simulator! 🏰
player_hp = 100
player_damage = 20
total_kills = 0
total_gold = 0

print("🏰 WAVE DEFENSE!")
print("=" * 30)

for wave in range(1, 4):  # 3 waves
    enemies_in_wave = wave * 3  # More enemies each wave
    print(f"\\n⚔️ WAVE {wave} — {enemies_in_wave} enemies incoming!")
    
    for enemy_num in range(1, enemies_in_wave + 1):
        # Random enemy
        enemy_hp = random.randint(20, 40) + (wave * 10)
        enemy_damage = random.randint(5, 15) + (wave * 3)
        
        # Simple combat
        while enemy_hp > 0 and player_hp > 0:
            enemy_hp -= player_damage
            if enemy_hp > 0:
                player_hp -= enemy_damage
        
        if player_hp <= 0:
            print(f"  💀 Defeated on wave {wave}, enemy {enemy_num}!")
            break
        
        total_kills += 1
        gold_earned = random.randint(5, 15) * wave
        total_gold += gold_earned
        print(f"  ✅ Enemy {enemy_num} down! +{gold_earned}g | HP: {player_hp}")
    
    if player_hp <= 0:
        break
    
    # Heal between waves
    heal = 30
    player_hp = min(player_hp + heal, 100)
    print(f"  💚 Healed +{heal}! HP: {player_hp}")

print(f"\\n{'='*30}")
print(f"🏆 Results: {total_kills} kills, {total_gold} gold")
print(f"{'Victory! 🎉' if player_hp > 0 else 'Defeat... 💀'}")`
              },
              {
                type: "tip",
                content: "The `end=\" \"` parameter in print() prevents the newline, so things print on the same line. Great for progress bars and compact displays!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a countdown from 10 to 1, then print 'GAME START!' using range() with a negative step.",
                  "**Exercise 2:** Build an enemy farming loop: defeat 10 enemies, each gives random XP (10-30). Show running total.",
                  "**Exercise 3:** Loop through an inventory list and print each item with its index number.",
                  "**Exercise 4:** Create a dice roller that rolls a d20 ten times and finds the highest roll.",
                  "**Exercise 5:** Expand the wave defense game to include different enemy types."
                ]
              },
              {
                type: "quiz",
                question: "How many times does this loop run?\n\nfor i in range(3):\n    print(i)",
                options: [
                  { id: "a", text: "2 times" },
                  { id: "b", text: "3 times" },
                  { id: "c", text: "4 times" },
                  { id: "d", text: "Infinite times" }
                ],
                correct: "b",
                explanation: "range(3) gives 0, 1, 2 — that's 3 numbers, so the loop runs 3 times! Remember: range(n) gives n numbers starting from 0."
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "While Loops = The Game Loop",
          completed: false,
          content: {
            description: "Master while loops — the foundation of every game's main loop! Build interactive game loops with player input and dynamic state.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll build while loops for game loops, use break and continue for flow control, and create interactive text-based games.

Every video game has a **main loop** — code that runs continuously, checking for input, updating the game state, and rendering the screen. In a text-based game, our main loop asks for player input, processes it, and shows the result. This is the **game loop** pattern, and it uses while loops.`
              },
              {
                type: "heading",
                level: 2,
                content: "While Loop Basics"
              },
              {
                type: "code",
                language: "python",
                filename: "while_basics.py",
                code: `# While loop — runs AS LONG AS condition is True
health = 100
turn = 0
damage_per_turn = 15

print("⚔️ Battle Simulation!")
while health > 0:
    turn += 1
    health -= damage_per_turn
    health = max(health, 0)  # Don't go below 0
    
    bar_length = 20
    filled = int((health / 100) * bar_length)
    bar = "█" * filled + "░" * (bar_length - filled)
    print(f"Turn {turn}: [{bar}] {health} HP")

print(f"💀 Defeated after {turn} turns!")`
              },
              {
                type: "heading",
                level: 2,
                content: "Break and Continue"
              },
              {
                type: "code",
                language: "python",
                filename: "break_continue.py",
                code: `# BREAK — escape the loop immediately!
print("🔍 Searching for treasure...")
rooms = ["empty", "monster", "trap", "TREASURE", "exit"]

for room in rooms:
    print(f"  Entering: {room}")
    if room == "TREASURE":
        print("  🎉 Found the treasure!")
        break  # Stop searching!
# Doesn't check "exit" because break ended the loop

print()

# CONTINUE — skip to the next iteration
print("⚔️ Fighting enemies (skip shielded ones)...")
enemies = ["goblin", "SHIELDED_ORC", "skeleton", "SHIELDED_KNIGHT", "dragon"]

for enemy in enemies:
    if enemy.startswith("SHIELDED"):
        print(f"  🛡️ {enemy} — can't attack, skipping...")
        continue  # Skip to next enemy
    print(f"  ⚔️ Attacked {enemy}!")
    
print()

# WHILE with break — common game pattern
import random
attempts = 0
while True:  # Infinite loop
    attempts += 1
    roll = random.randint(1, 20)
    print(f"  🎲 Roll #{attempts}: {roll}")
    if roll == 20:
        print(f"  🎉 Natural 20 after {attempts} rolls!")
        break  # Exit the infinite loop`
              },
              {
                type: "warning",
                content: "While loops can run forever if the condition never becomes False! Always make sure something inside the loop eventually changes the condition, or use 'break' to exit. An infinite loop will freeze your program!"
              },
              {
                type: "heading",
                level: 2,
                content: "Interactive Game Loop"
              },
              {
                type: "code",
                language: "python",
                filename: "game_loop.py",
                code: `import random

# Mini RPG Game Loop! 🎮
player_hp = 100
player_max_hp = 100
player_attack = 15
potions = 3
gold = 0
monsters_killed = 0

print("🏰 DUNGEON CRAWLER!")
print("Commands: fight, heal, stats, flee")
print("=" * 30)

game_running = True
while game_running:
    action = input("\\n> What do you do? ").lower().strip()
    
    if action == "fight":
        # Generate random monster
        monster_names = ["Goblin", "Skeleton", "Orc", "Bat", "Spider"]
        monster = random.choice(monster_names)
        monster_hp = random.randint(20, 50)
        monster_atk = random.randint(5, 15)
        
        print(f"\\n⚔️ A {monster} appears! (HP: {monster_hp})")
        
        while monster_hp > 0 and player_hp > 0:
            # Player attacks
            dmg = random.randint(10, player_attack)
            monster_hp -= dmg
            print(f"  You hit {monster} for {dmg}! (Monster HP: {max(0, monster_hp)})")
            
            if monster_hp <= 0:
                loot = random.randint(5, 20)
                gold += loot
                monsters_killed += 1
                print(f"  🎉 {monster} defeated! +{loot} gold!")
                break
            
            # Monster attacks
            dmg = random.randint(3, monster_atk)
            player_hp -= dmg
            print(f"  {monster} hits you for {dmg}! (Your HP: {player_hp})")
            
            if player_hp <= 0:
                print("  💀 You have been defeated!")
                game_running = False
    
    elif action == "heal":
        if potions > 0:
            heal_amount = 30
            player_hp = min(player_hp + heal_amount, player_max_hp)
            potions -= 1
            print(f"🧪 Used potion! +{heal_amount} HP ({player_hp}/{player_max_hp})")
            print(f"   Potions remaining: {potions}")
        else:
            print("❌ No potions left!")
    
    elif action == "stats":
        print(f"\\n📊 STATS")
        print(f"  ❤️  HP: {player_hp}/{player_max_hp}")
        print(f"  🧪 Potions: {potions}")
        print(f"  💰 Gold: {gold}")
        print(f"  💀 Kills: {monsters_killed}")
    
    elif action == "flee":
        print("🏃 You flee the dungeon!")
        game_running = False
    
    else:
        print("❓ Unknown command! Try: fight, heal, stats, flee")

print(f"\\n{'='*30}")
print(f"🏆 Adventure Over!")
print(f"Monsters killed: {monsters_killed}")
print(f"Gold earned: {gold}")`
              },
              {
                type: "tip",
                content: "Use `.lower().strip()` on input to handle player typos: 'Fight', 'FIGHT', ' fight ' all become 'fight'. Makes your game much more forgiving!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a guessing game: computer picks 1-100, player guesses until correct. Count attempts.",
                  "**Exercise 2:** Build a battle loop where player and enemy take turns attacking until one dies.",
                  "**Exercise 3:** Create a shop loop: show items, let player buy/sell, update gold, type 'exit' to leave.",
                  "**Exercise 4:** Build a countdown timer that prints 10...9...8... then 'GAME START!'",
                  "**Exercise 5:** Expand the dungeon crawler with a shop, leveling, and stronger enemies over time."
                ]
              },
              {
                type: "checkpoint",
                content: "Build an interactive game loop with at least 3 commands (fight, heal, quit). The game should continue until the player dies or chooses to quit."
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Lists & Inventories",
      lessons: [
        {
          id: "4-1",
          title: "Inventory System",
          completed: false,
          content: {
            description: "Master Python lists by building game inventories — add items, remove them, search, sort, and manage collections like a pro!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create lists, add/remove items, search collections, slice lists, and build a complete inventory management system.

Your game inventory is a **list** — a collection of items stored in order. Lists are one of Python's most powerful features. They let you store multiple values in a single variable, access them by position, add new ones, remove old ones, and process them all with loops.`
              },
              {
                type: "heading",
                level: 2,
                content: "Creating and Accessing Lists"
              },
              {
                type: "code",
                language: "python",
                filename: "list_basics.py",
                code: `# Creating lists
inventory = ["Sword", "Shield", "Potion", "Gold Key"]
damage_values = [15, 25, 40, 60, 100]
mixed = ["Sword", 25, True, 3.14]  # Can mix types!
empty = []  # Empty list

# Accessing by index (starts at 0!)
print(inventory[0])    # First: "Sword"
print(inventory[1])    # Second: "Shield"
print(inventory[-1])   # Last: "Gold Key"
print(inventory[-2])   # Second-to-last: "Potion"

# Length
print(f"Items: {len(inventory)}")  # 4

# Check membership
if "Gold Key" in inventory:
    print("🔑 You can open the gold door!")
if "Bow" not in inventory:
    print("🚫 You don't have a bow")

# Slicing (grabbing portions)
print(inventory[0:2])   # First 2: ["Sword", "Shield"]
print(inventory[:3])    # First 3 (shortcut)
print(inventory[2:])    # From index 2 onward
print(inventory[::-1])  # Reversed!`
              },
              {
                type: "heading",
                level: 2,
                content: "Adding and Removing Items"
              },
              {
                type: "code",
                language: "python",
                filename: "list_management.py",
                code: `inventory = ["Sword", "Shield"]
print(f"Start: {inventory}")

# ADDING items
inventory.append("Potion")         # Add to end
print(f"Found potion: {inventory}")

inventory.insert(0, "Helmet")      # Add at specific position
print(f"Equipped helmet: {inventory}")

# REMOVING items
inventory.remove("Potion")         # Remove by name (first match)
print(f"Used potion: {inventory}")

last_item = inventory.pop()        # Remove and return last item
print(f"Dropped {last_item}: {inventory}")

first_item = inventory.pop(0)      # Remove at specific index
print(f"Sold {first_item}: {inventory}")

# SORTING
weapons = ["Greatsword", "Dagger", "Bow", "Staff", "Axe"]
weapons.sort()                     # Alphabetical (modifies original!)
print(f"Sorted: {weapons}")

weapons.sort(reverse=True)         # Reverse alphabetical
print(f"Reverse: {weapons}")

# COUNTING and FINDING
loot = ["Gold", "Gold", "Gem", "Gold", "Potion"]
print(f"Gold count: {loot.count('Gold')}")   # 3
print(f"Gem position: {loot.index('Gem')}")  # 2`
              },
              {
                type: "heading",
                level: 2,
                content: "Complete Inventory System"
              },
              {
                type: "code",
                language: "python",
                filename: "inventory_system.py",
                code: `# Full inventory management system! 🎒

MAX_INVENTORY_SIZE = 10
inventory = ["Iron Sword", "Leather Armor", "Health Potion", "Health Potion"]

def show_inventory():
    print(f"\\n🎒 INVENTORY ({len(inventory)}/{MAX_INVENTORY_SIZE})")
    print("-" * 30)
    if not inventory:
        print("  (empty)")
    for i, item in enumerate(inventory, 1):
        print(f"  {i}. {item}")
    print("-" * 30)

def add_item(item_name):
    if len(inventory) >= MAX_INVENTORY_SIZE:
        print(f"❌ Inventory full! Drop something first.")
        return False
    inventory.append(item_name)
    print(f"✅ Added {item_name}!")
    return True

def remove_item(item_name):
    if item_name in inventory:
        inventory.remove(item_name)
        print(f"🗑️ Removed {item_name}")
        return True
    print(f"❌ {item_name} not in inventory!")
    return False

def use_item(item_name):
    if item_name not in inventory:
        print(f"❌ You don't have {item_name}!")
        return
    
    if "Potion" in item_name:
        print(f"🧪 Used {item_name}! Feel refreshed!")
        inventory.remove(item_name)
    elif "Scroll" in item_name:
        print(f"📜 Read {item_name}! Learned new knowledge!")
        inventory.remove(item_name)
    else:
        print(f"❓ Can't use {item_name} like that!")

# Test the system!
show_inventory()
add_item("Magic Scroll")
add_item("Diamond Ring")
use_item("Health Potion")
show_inventory()`
              },
              {
                type: "tip",
                content: "Lists start counting at 0, not 1! So `inventory[0]` is the FIRST item. This is called 'zero-based indexing' and it's used in almost every programming language."
              },
              {
                type: "heading",
                level: 2,
                content: "List Comprehensions (Power Move!)"
              },
              {
                type: "code",
                language: "python",
                filename: "comprehensions.py",
                code: `# List comprehensions create new lists in one line! 🚀
import random

# Generate 10 random damage values
damages = [random.randint(10, 50) for _ in range(10)]
print(f"Damage rolls: {damages}")

# Filter — keep only high hits
big_hits = [d for d in damages if d > 30]
print(f"Big hits (>30): {big_hits}")

# Transform — double all values
doubled = [d * 2 for d in damages]
print(f"With buff (2x): {doubled}")

# Generate enemy names
enemy_names = [f"Goblin_{i}" for i in range(1, 6)]
print(f"Enemies: {enemy_names}")

# Filter inventory
all_items = ["Iron Sword", "Broken Shield", "Health Potion", "Broken Armor", "Gold Ring"]
usable = [item for item in all_items if "Broken" not in item]
print(f"Usable items: {usable}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create an inventory list with 5 items. Practice append, remove, pop, and insert.",
                  "**Exercise 2:** Build an inventory system with max capacity. Prevent adding items when full.",
                  "**Exercise 3:** Create a loot generator: generate 10 random items, filter out 'Broken' ones, keep the good stuff.",
                  "**Exercise 4:** Build a party system: add/remove party members, show the roster, limit to 4 members max.",
                  "**Exercise 5:** Sort a list of enemy dictionaries by HP (hint: use key= parameter in sort)."
                ]
              },
              {
                type: "quiz",
                question: "What does `inventory[-1]` return?",
                options: [
                  { id: "a", text: "The first item" },
                  { id: "b", text: "The last item" },
                  { id: "c", text: "An error" },
                  { id: "d", text: "Nothing" }
                ],
                correct: "b",
                explanation: "Negative indices count from the end! -1 is the last item, -2 is second-to-last, etc. It's a Python shortcut to quickly access the end of a list."
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Dictionaries = Game Data",
          completed: false,
          content: {
            description: "Store complex game data with dictionaries — character sheets, item databases, enemy stats, and more!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create dictionaries for game data, nest them for complex structures, and build item databases and character systems.

Lists are great for ordered collections, but what if you want to store data with **names** instead of numbers? That's what **dictionaries** are for. Instead of inventory[0] for your first item, you can use player['health'] to get exactly what you want by name.`
              },
              {
                type: "heading",
                level: 2,
                content: "Dictionary Basics"
              },
              {
                type: "code",
                language: "python",
                filename: "dict_basics.py",
                code: `# Dictionaries use key: value pairs
player = {
    "name": "DragonSlayer99",
    "class": "Warrior",
    "level": 15,
    "health": 150,
    "mana": 30,
    "strength": 25,
    "defense": 20,
    "gold": 500,
    "is_alive": True
}

# Access values by key
print(f"Player: {player['name']}")
print(f"Class: {player['class']}")
print(f"❤️ HP: {player['health']}")
print(f"💪 STR: {player['strength']}")

# Modify values
player["health"] -= 30  # Take damage
player["gold"] += 100   # Find gold
player["level"] += 1    # Level up!

# Add new keys
player["mana_regen"] = 5
player["equipped_weapon"] = "Greatsword"

# Safe access with .get() — returns default if key missing
speed = player.get("speed", 10)  # Returns 10 if "speed" doesn't exist
print(f"Speed: {speed}")  # 10

# Loop through all stats
print(f"\\n📊 Full Character Sheet:")
for stat, value in player.items():
    print(f"  {stat}: {value}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Item Database"
              },
              {
                type: "code",
                language: "python",
                filename: "item_database.py",
                code: `# Complete item database! 🗡️
items_db = {
    "iron_sword": {
        "name": "Iron Sword",
        "type": "weapon",
        "damage": 25,
        "price": 100,
        "rarity": "Common",
        "emoji": "⚔️"
    },
    "fire_staff": {
        "name": "Fire Staff",
        "type": "weapon",
        "damage": 35,
        "price": 250,
        "rarity": "Rare",
        "emoji": "🔥"
    },
    "health_potion": {
        "name": "Health Potion",
        "type": "consumable",
        "heal": 50,
        "price": 25,
        "rarity": "Common",
        "emoji": "🧪"
    },
    "diamond_armor": {
        "name": "Diamond Armor",
        "type": "armor",
        "defense": 40,
        "price": 500,
        "rarity": "Epic",
        "emoji": "💎"
    }
}

# Look up an item
item_id = "fire_staff"
item = items_db[item_id]
print(f"{item['emoji']} {item['name']}")
print(f"  Type: {item['type']}")
print(f"  Damage: {item['damage']}")
print(f"  Price: {item['price']} gold")
print(f"  Rarity: {item['rarity']}")

# List all weapons
print("\\n⚔️ Available Weapons:")
for item_id, item_data in items_db.items():
    if item_data["type"] == "weapon":
        print(f"  {item_data['emoji']} {item_data['name']}: {item_data['damage']} DMG — {item_data['price']}g")`
              },
              {
                type: "heading",
                level: 2,
                content: "Combining Lists and Dictionaries"
              },
              {
                type: "code",
                language: "python",
                filename: "combined_structures.py",
                code: `# Party system — list of character dictionaries! 🎭
party = [
    {"name": "Hero", "class": "Warrior", "hp": 150, "atk": 25},
    {"name": "Luna", "class": "Mage", "hp": 80, "atk": 40},
    {"name": "Shadow", "class": "Rogue", "hp": 100, "atk": 30},
]

print("🎭 YOUR PARTY:")
for member in party:
    print(f"  {member['name']} the {member['class']}: {member['hp']} HP, {member['atk']} ATK")

# Find the strongest member
strongest = max(party, key=lambda m: m["atk"])
print(f"\\n💪 Strongest: {strongest['name']} ({strongest['atk']} ATK)")

# Total party HP
total_hp = sum(member["hp"] for member in party)
print(f"❤️ Total party HP: {total_hp}")`
              },
              {
                type: "tip",
                content: "Use `.get('key', default)` instead of `dict['key']` when a key might not exist. `player.get('mana', 0)` safely returns 0 if 'mana' isn't set, while `player['mana']` would crash with a KeyError!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a player dictionary with at least 8 stats. Print a formatted character sheet.",
                  "**Exercise 2:** Build an item database with 6+ items of different types. Write a function to look up items by ID.",
                  "**Exercise 3:** Create a party system with 3 characters. Find the one with the highest HP.",
                  "**Exercise 4:** Build a shop that uses the item database to show prices and process purchases.",
                  "**Exercise 5:** Create a battle system using dictionaries for both player and enemy stats."
                ]
              },
              {
                type: "quiz",
                question: "How do you access the player's health? player = {'name': 'Hero', 'health': 100}",
                options: [
                  { id: "a", text: "player.health" },
                  { id: "b", text: "player['health']" },
                  { id: "c", text: "player[1]" },
                  { id: "d", text: "player(health)" }
                ],
                correct: "b",
                explanation: "Dictionaries use square brackets with the key NAME: player['health']. Note: player.health works for objects/classes but NOT for plain dictionaries."
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "Functions = Abilities",
      lessons: [
        {
          id: "5-1",
          title: "Creating Game Abilities",
          completed: false,
          content: {
            description: "Master functions by building reusable game abilities, damage calculators, and combat systems!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create functions with parameters, return values, default arguments, and build a complete combat ability system.

Functions are like **abilities** in a game — reusable actions you can activate anytime. You define the ability once (write the function), then use it whenever you need (call the function). Without functions, you'd copy-paste the same code everywhere. With functions, you write it once and call it 100 times.`
              },
              {
                type: "heading",
                level: 2,
                content: "Function Basics"
              },
              {
                type: "code",
                language: "python",
                filename: "function_basics.py",
                code: `# Defining a function
def basic_attack(damage):
    """Perform a basic attack."""
    print(f"⚔️ Basic Attack! {damage} damage!")
    return damage

def power_strike(damage):
    """A powerful attack that deals 2x damage."""
    total = damage * 2
    print(f"💥 POWER STRIKE! {total} damage!")
    return total

def heal(current_hp, heal_amount, max_hp=100):
    """Heal the player. Can't exceed max_hp."""
    new_hp = min(current_hp + heal_amount, max_hp)
    actual_heal = new_hp - current_hp
    print(f"💚 Healed for {actual_heal}! HP: {new_hp}/{max_hp}")
    return new_hp

# Using the functions
enemy_hp = 100
player_hp = 50

enemy_hp -= basic_attack(25)     # 25 damage
enemy_hp -= power_strike(25)     # 50 damage
player_hp = heal(player_hp, 30)  # Heal 30 HP

print(f"\\nEnemy HP: {enemy_hp}")
print(f"Player HP: {player_hp}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Advanced Function Features"
              },
              {
                type: "code",
                language: "python",
                filename: "advanced_functions.py",
                code: `import random

def calculate_damage(base_damage, strength, crit=False, weapon_bonus=0):
    """
    Calculate total damage with all modifiers.
    
    Args:
        base_damage: Base attack power
        strength: Player's strength stat
        crit: Whether this is a critical hit
        weapon_bonus: Extra damage from weapon
    
    Returns:
        Total damage as integer
    """
    total = base_damage + (strength * 0.5) + weapon_bonus
    
    if crit:
        total *= 2.5
        print("💥 CRITICAL HIT!")
    
    return int(total)

# Call with positional arguments
dmg = calculate_damage(20, 10)
print(f"Normal: {dmg}")

# Call with keyword arguments (any order!)
dmg = calculate_damage(base_damage=25, strength=15, crit=True, weapon_bonus=10)
print(f"Full power: {dmg}")

# Return multiple values
def get_player_info():
    return "Hero", 100, 50, 15  # name, hp, mana, level

name, hp, mana, level = get_player_info()
print(f"{name}: HP={hp}, Mana={mana}, Level={level}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Complete Battle System"
              },
              {
                type: "code",
                language: "python",
                filename: "battle_system.py",
                code: `import random

def roll_dice(sides=20):
    """Roll a dice with given number of sides."""
    return random.randint(1, sides)

def attempt_attack(attacker_str, defender_def):
    """Check if attack hits based on d20 roll."""
    roll = roll_dice(20)
    attack_value = roll + attacker_str
    
    is_crit = roll == 20
    is_miss = roll == 1
    hit = attack_value >= defender_def and not is_miss
    
    return hit, is_crit, roll

def calculate_combat_damage(base_dmg, crit=False):
    """Calculate damage with variance."""
    variance = random.uniform(0.8, 1.2)
    damage = int(base_dmg * variance)
    if crit:
        damage *= 3
    return max(damage, 1)

def battle_round(attacker, defender):
    """Execute one round of combat."""
    hit, crit, roll = attempt_attack(
        attacker["strength"], defender["defense"]
    )
    
    print(f"  🎲 {attacker['name']} rolls {roll}...")
    
    if not hit:
        print(f"  ❌ Miss!")
        return
    
    damage = calculate_combat_damage(attacker["attack"], crit)
    
    if crit:
        print(f"  💥 CRITICAL! {damage} damage!")
    else:
        print(f"  ⚔️ Hit! {damage} damage!")
    
    defender["hp"] -= damage
    defender["hp"] = max(defender["hp"], 0)
    print(f"  {defender['name']} HP: {defender['hp']}")

# Battle!
player = {"name": "Hero", "hp": 100, "attack": 20, "strength": 12, "defense": 14}
enemy = {"name": "Dark Knight", "hp": 80, "attack": 15, "strength": 10, "defense": 12}

print("⚔️ BATTLE START!")
print(f"{player['name']} vs {enemy['name']}")
print("=" * 30)

turn = 0
while player["hp"] > 0 and enemy["hp"] > 0:
    turn += 1
    print(f"\\n--- Turn {turn} ---")
    battle_round(player, enemy)
    if enemy["hp"] > 0:
        battle_round(enemy, player)

winner = player["name"] if player["hp"] > 0 else enemy["name"]
print(f"\\n🏆 {winner} wins after {turn} turns!")`
              },
              {
                type: "tip",
                content: "Functions should do ONE thing well. 'calculate_damage()' only calculates, 'attempt_attack()' only checks if it hits. Keep them focused and combine them in higher-level functions like 'battle_round()'. This is called 'separation of concerns'."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create functions for 3 different attacks (basic, power, magic) with different damage formulas.",
                  "**Exercise 2:** Build a `use_potion(player, potion_type)` function that heals different amounts based on potion type.",
                  "**Exercise 3:** Create a dice rolling system with functions for d4, d6, d8, d12, d20.",
                  "**Exercise 4:** Build a complete battle system between player and enemy using functions.",
                  "**Exercise 5:** Write a `generate_loot()` function that returns a random item with random stats."
                ]
              },
              {
                type: "checkpoint",
                content: "Build a battle system with separate functions for: attack rolling, damage calculation, and healing. Create a full battle loop between player and enemy!"
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Classes = Game Objects",
          completed: false,
          content: {
            description: "Level up to Object-Oriented Programming! Create Player, Enemy, and Item classes for professional game architecture.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll understand classes and objects, create game entity classes with methods, and use inheritance for different character types.

**Classes** are blueprints for creating objects. Think of a class like a character template in a game — the template defines what stats every character has (health, mana, damage), but each actual character fills in their own values. Classes combine data (variables) and abilities (functions) into one neat package.`
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Class"
              },
              {
                type: "code",
                language: "python",
                filename: "first_class.py",
                code: `class Player:
    """A game player character."""
    
    def __init__(self, name, player_class, health=100):
        """Initialize a new player (constructor)."""
        self.name = name
        self.player_class = player_class
        self.health = health
        self.max_health = health
        self.level = 1
        self.xp = 0
        self.gold = 0
        self.inventory = []
    
    def take_damage(self, amount):
        """Reduce health by damage amount."""
        self.health = max(self.health - amount, 0)
        print(f"💔 {self.name} takes {amount} damage! HP: {self.health}/{self.max_health}")
        if self.health <= 0:
            print(f"💀 {self.name} has been defeated!")
    
    def heal(self, amount):
        """Restore health."""
        old_hp = self.health
        self.health = min(self.health + amount, self.max_health)
        print(f"💚 {self.name} heals {self.health - old_hp} HP! ({self.health}/{self.max_health})")
    
    def gain_xp(self, amount):
        """Gain experience and check for level up."""
        self.xp += amount
        print(f"✨ {self.name} gains {amount} XP!")
        while self.xp >= self.level * 100:
            self.xp -= self.level * 100
            self.level += 1
            self.max_health += 10
            self.health = self.max_health
            print(f"🎉 LEVEL UP! {self.name} is now Level {self.level}!")
    
    def show_stats(self):
        """Display character stats."""
        print(f"\\n📊 {self.name} the {self.player_class}")
        print(f"  ⭐ Level: {self.level}")
        print(f"  ❤️  HP: {self.health}/{self.max_health}")
        print(f"  ✨ XP: {self.xp}/{self.level * 100}")
        print(f"  💰 Gold: {self.gold}")

# Create player objects!
hero = Player("DragonSlayer", "Warrior", 150)
mage = Player("Luna", "Mage", 80)

hero.show_stats()
hero.take_damage(30)
hero.heal(20)
hero.gain_xp(150)  # Level up!
hero.show_stats()`
              },
              {
                type: "heading",
                level: 2,
                content: "Enemy Class with Inheritance"
              },
              {
                type: "code",
                language: "python",
                filename: "enemy_class.py",
                code: `import random

class Enemy:
    """Base enemy class."""
    
    def __init__(self, name, hp, attack, xp_reward, gold_reward):
        self.name = name
        self.hp = hp
        self.max_hp = hp
        self.attack = attack
        self.xp_reward = xp_reward
        self.gold_reward = gold_reward
    
    def attack_player(self, player):
        damage = random.randint(self.attack // 2, self.attack)
        print(f"👹 {self.name} attacks {player.name}!")
        player.take_damage(damage)
    
    def take_damage(self, amount):
        self.hp = max(self.hp - amount, 0)
        print(f"  {self.name} takes {amount} damage! ({self.hp}/{self.max_hp})")
    
    def is_alive(self):
        return self.hp > 0

# Factory function to create random enemies
def spawn_enemy(difficulty=1):
    enemies = [
        ("Goblin", 30, 8, 15, 10),
        ("Skeleton", 40, 12, 25, 15),
        ("Orc", 60, 15, 40, 25),
        ("Dark Knight", 80, 20, 60, 40),
        ("Dragon", 150, 30, 200, 100),
    ]
    
    # Scale by difficulty
    name, hp, atk, xp, gold = random.choice(enemies)
    return Enemy(
        name, 
        int(hp * difficulty), 
        int(atk * difficulty),
        int(xp * difficulty),
        int(gold * difficulty)
    )`
              },
              {
                type: "tip",
                content: "`self` refers to the specific object (instance) calling the method. When you write `hero.take_damage(30)`, inside the function `self` IS `hero`. It's how the object knows to change ITS OWN health, not some other player's."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a Player class with name, health, attack, and methods for take_damage, heal, and show_stats.",
                  "**Exercise 2:** Create an Enemy class with attack_player and take_damage methods.",
                  "**Exercise 3:** Build a complete battle between a Player object and an Enemy object using their methods.",
                  "**Exercise 4:** Add an inventory system to the Player class: add_item, remove_item, show_inventory.",
                  "**Exercise 5:** Create specialized enemy types (Goblin, Dragon) with unique attack patterns."
                ]
              },
              {
                type: "checkpoint",
                content: "Create Player and Enemy classes, then build a turn-based battle using their methods. The player should gain XP and gold when they win!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Build a Text RPG!",
      lessons: [
        {
          id: "6-1",
          title: "Putting It All Together",
          completed: false,
          content: {
            description: "Combine everything you've learned into a complete text-based RPG with exploration, combat, items, and progression!",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll have built a complete text RPG that uses variables, conditions, loops, lists, dictionaries, functions, and classes — everything from this course!

This is your **capstone project** — the moment where all the pieces come together. You'll build a game with exploration (choosing paths), combat (fighting enemies), items (inventory management), and progression (leveling up and getting stronger).`
              },
              {
                type: "heading",
                level: 2,
                content: "The Complete RPG"
              },
              {
                type: "code",
                language: "python",
                filename: "text_rpg.py",
                code: `import random

# ===== GAME CONFIGURATION =====
PLAYER_START_HP = 100
POTION_HEAL = 40
POTION_COST = 25

# ===== PLAYER DATA =====
player = {
    "name": "",
    "class": "",
    "hp": PLAYER_START_HP,
    "max_hp": PLAYER_START_HP,
    "attack": 15,
    "defense": 10,
    "gold": 50,
    "potions": 2,
    "xp": 0,
    "level": 1,
    "kills": 0
}

# ===== ENEMIES =====
enemies = [
    {"name": "Goblin", "hp": 30, "atk": 8, "gold": 10, "xp": 15},
    {"name": "Skeleton", "hp": 45, "atk": 12, "gold": 18, "xp": 25},
    {"name": "Orc", "hp": 60, "atk": 16, "gold": 30, "xp": 40},
    {"name": "Dark Mage", "hp": 50, "atk": 22, "gold": 40, "xp": 50},
    {"name": "Dragon", "hp": 120, "atk": 28, "gold": 100, "xp": 150},
]

# ===== FUNCTIONS =====
def show_stats():
    p = player
    print(f"\\n📊 {p['name']} the {p['class']} (Level {p['level']})")
    print(f"  ❤️  HP: {p['hp']}/{p['max_hp']}")
    print(f"  ⚔️  ATK: {p['attack']}  🛡️ DEF: {p['defense']}")
    print(f"  💰 Gold: {p['gold']}  🧪 Potions: {p['potions']}")
    print(f"  ✨ XP: {p['xp']}/{p['level'] * 100}  💀 Kills: {p['kills']}")

def use_potion():
    if player["potions"] <= 0:
        print("❌ No potions!")
        return
    heal = min(POTION_HEAL, player["max_hp"] - player["hp"])
    player["hp"] += heal
    player["potions"] -= 1
    print(f"🧪 Healed {heal} HP! ({player['hp']}/{player['max_hp']})")

def check_level_up():
    while player["xp"] >= player["level"] * 100:
        player["xp"] -= player["level"] * 100
        player["level"] += 1
        player["max_hp"] += 15
        player["hp"] = player["max_hp"]
        player["attack"] += 3
        player["defense"] += 2
        print(f"\\n🎉 LEVEL UP! Now Level {player['level']}!")
        print(f"  HP: {player['max_hp']} | ATK: {player['attack']} | DEF: {player['defense']}")

def battle(enemy_data):
    enemy = enemy_data.copy()
    enemy["hp"] = int(enemy["hp"] * (1 + player["level"] * 0.1))
    
    print(f"\\n⚔️ A {enemy['name']} appears! (HP: {enemy['hp']})")
    
    while enemy["hp"] > 0 and player["hp"] > 0:
        # Player turn
        action = input("  [a]ttack or [h]eal? ").lower()
        
        if action == "h":
            use_potion()
        else:
            dmg = random.randint(player["attack"] // 2, player["attack"])
            crit = random.random() < 0.15
            if crit:
                dmg = int(dmg * 2.5)
                print(f"  💥 CRITICAL! You deal {dmg} damage!")
            else:
                print(f"  ⚔️ You deal {dmg} damage!")
            enemy["hp"] = max(enemy["hp"] - dmg, 0)
            print(f"  {enemy['name']} HP: {enemy['hp']}")
        
        if enemy["hp"] <= 0:
            player["gold"] += enemy["gold"]
            player["xp"] += enemy["xp"]
            player["kills"] += 1
            print(f"\\n  🎉 {enemy['name']} defeated!")
            print(f"  +{enemy['gold']} gold, +{enemy['xp']} XP!")
            check_level_up()
            return True
        
        # Enemy turn
        dmg = max(random.randint(enemy["atk"] // 2, enemy["atk"]) - player["defense"] // 2, 1)
        player["hp"] = max(player["hp"] - dmg, 0)
        print(f"  👹 {enemy['name']} deals {dmg} damage! (Your HP: {player['hp']})")
    
    print("\\n  💀 You have been defeated...")
    return False

def shop():
    print("\\n🏪 SHOP")
    print(f"  1. Health Potion ({POTION_COST}g)")
    print(f"  2. Weapon Upgrade (100g, +5 ATK)")
    print(f"  3. Armor Upgrade (80g, +3 DEF)")
    print(f"  4. Leave")
    print(f"  💰 Your gold: {player['gold']}")
    
    choice = input("  Buy what? ")
    if choice == "1" and player["gold"] >= POTION_COST:
        player["gold"] -= POTION_COST
        player["potions"] += 1
        print(f"  ✅ Bought potion! ({player['potions']} total)")
    elif choice == "2" and player["gold"] >= 100:
        player["gold"] -= 100
        player["attack"] += 5
        print(f"  ✅ ATK upgraded to {player['attack']}!")
    elif choice == "3" and player["gold"] >= 80:
        player["gold"] -= 80
        player["defense"] += 3
        print(f"  ✅ DEF upgraded to {player['defense']}!")
    elif choice == "4":
        return
    else:
        print("  ❌ Can't afford that!")

# ===== MAIN GAME =====
print("🏰 TEXT RPG ADVENTURE!")
print("=" * 30)
player["name"] = input("Enter your name: ") or "Hero"
player["class"] = input("Class (Warrior/Mage/Rogue): ").title() or "Warrior"

print(f"\\n⚔️ Welcome, {player['name']} the {player['class']}!")
print("Commands: fight, shop, stats, heal, quit")

while player["hp"] > 0:
    action = input("\\n> ").lower().strip()
    
    if action == "fight":
        difficulty = min(player["level"], len(enemies))
        enemy = random.choice(enemies[:difficulty])
        if not battle(enemy):
            break
    elif action == "shop":
        shop()
    elif action == "stats":
        show_stats()
    elif action == "heal":
        use_potion()
    elif action == "quit":
        print("\\n🏃 You flee the dungeon!")
        break
    else:
        print("❓ Commands: fight, shop, stats, heal, quit")

print(f"\\n{'='*30}")
print(f"🏆 GAME OVER!")
show_stats()`
              },
              {
                type: "tip",
                content: "This game uses EVERYTHING you learned: variables, f-strings, if/elif/else, while loops, for loops, lists, dictionaries, functions, random numbers, and user input. If you understand this code, you've truly mastered the fundamentals!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Add a 'run' option in combat that has a 50% chance of escaping.",
                  "**Exercise 2:** Add an inventory system with equippable weapons that change your attack stat.",
                  "**Exercise 3:** Add a magic system: spells that cost mana and deal different types of damage.",
                  "**Exercise 4:** Add a boss fight every 5 kills that's much harder but gives great rewards.",
                  "**Exercise 5:** Add save/load functionality using file I/O (json module)."
                ]
              },
              {
                type: "checkpoint",
                content: "Get the RPG running and play through it! Try to reach Level 3 and defeat at least 10 enemies. Then add one custom feature of your own!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Pygame — Graphics!",
      lessons: [
        {
          id: "7-1",
          title: "Introduction to Pygame",
          completed: false,
          content: {
            description: "Move beyond text! Learn Pygame basics — windows, colors, shapes, and the game loop that powers graphical games.",
            sections: [
              {
                type: "text",
                content: `By the end of this lesson, you'll create a Pygame window, draw shapes, understand the game loop, and handle keyboard input for player movement.

Text games are awesome for learning, but eventually you want **graphics**! **Pygame** is a Python library that lets you create games with windows, images, sounds, and animations. It's perfect for 2D games like platformers, shooters, puzzles, and more.`
              },
              {
                type: "heading",
                level: 2,
                content: "Installing Pygame"
              },
              {
                type: "code",
                language: "text",
                filename: "install_pygame.txt",
                code: "# In your terminal/command prompt:\npip install pygame\n\n# Or on Replit: search 'pygame' in packages\n\n# Verify it works:\npython -c \"import pygame; print(pygame.ver)\""
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Pygame Window"
              },
              {
                type: "code",
                language: "python",
                filename: "first_window.py",
                code: `import pygame
import sys

# Initialize Pygame
pygame.init()

# Create window
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My First Game! 🎮")

# Colors (Red, Green, Blue) — each 0-255
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 100, 255)
YELLOW = (255, 255, 0)

# Player position
player_x = WIDTH // 2
player_y = HEIGHT // 2
player_speed = 5
player_size = 40

# Game loop
clock = pygame.time.Clock()
running = True

while running:
    # 1. Handle events (keyboard, mouse, quit)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # 2. Get keyboard input
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] or keys[pygame.K_a]:
        player_x -= player_speed
    if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
        player_x += player_speed
    if keys[pygame.K_UP] or keys[pygame.K_w]:
        player_y -= player_speed
    if keys[pygame.K_DOWN] or keys[pygame.K_s]:
        player_y += player_speed
    
    # Keep player on screen
    player_x = max(0, min(player_x, WIDTH - player_size))
    player_y = max(0, min(player_y, HEIGHT - player_size))
    
    # 3. Draw everything
    screen.fill(BLACK)  # Clear screen
    
    # Draw player (rectangle)
    pygame.draw.rect(screen, BLUE, (player_x, player_y, player_size, player_size))
    
    # Draw some other shapes
    pygame.draw.circle(screen, RED, (100, 100), 30)          # Circle
    pygame.draw.line(screen, GREEN, (0, 0), (200, 200), 3)   # Line
    
    # 4. Update display
    pygame.display.flip()
    clock.tick(60)  # 60 FPS

pygame.quit()
sys.exit()`
              },
              {
                type: "heading",
                level: 2,
                content: "The Game Loop Explained"
              },
              {
                type: "code",
                language: "text",
                filename: "game_loop_explained.txt",
                code: "Every frame, the game loop does 4 things:\n\n1. HANDLE EVENTS — Check for quit, key presses, mouse clicks\n2. UPDATE STATE  — Move player, check collisions, update scores\n3. DRAW          — Clear screen, draw background, draw objects\n4. DISPLAY       — Show the frame on screen\n\nThis runs 60 times per second (60 FPS)!\n\nwhile running:\n    handle_events()    # Step 1\n    update_game()      # Step 2\n    draw_everything()  # Step 3\n    pygame.display.flip()  # Step 4\n    clock.tick(60)     # Cap at 60 FPS"
              },
              {
                type: "tip",
                content: "Always call `screen.fill(BLACK)` at the start of each frame to clear the previous frame. Without it, old drawings stay on screen and everything smears together!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "list",
                items: [
                  "**Exercise 1:** Create a Pygame window with a colored background. Draw 3 different shapes on it.",
                  "**Exercise 2:** Make a square that moves with arrow keys or WASD, and stays within the window.",
                  "**Exercise 3:** Add a 'collectible' circle that appears at a random position. When the player touches it, move it somewhere new and add to a score.",
                  "**Exercise 4:** Display text on screen showing the player's score (use pygame.font).",
                  "**Exercise 5:** Add multiple collectibles and a timer — how many can you get in 30 seconds?"
                ]
              },
              {
                type: "checkpoint",
                content: "Create a Pygame window with a player square that moves with keyboard input. Add a collectible that respawns when touched and keep score!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "You're a Coder Now! 🎮",
      lessons: [
        {
          id: "8-1",
          title: "What You've Accomplished",
          completed: false,
          content: {
            description: "Celebrate your achievement! Review everything you learned and discover the exciting paths ahead.",
            sections: [
              {
                type: "text",
                content: `**CONGRATULATIONS, GAME DEVELOPER!** 🎉🎮

You've done something incredible. You started this course with zero programming knowledge, and now you can build real, playable games in Python. That's not just a course completion — that's a genuine, marketable **skill** that very few people your age have.

Let's look at everything you've mastered:`
              },
              {
                type: "heading",
                level: 2,
                content: "Skills You've Mastered"
              },
              {
                type: "list",
                items: [
                  "✅ **Variables & Data Types** — Storing game stats, player info, and item data",
                  "✅ **Math Operations** — Damage calculations, XP systems, gold economies",
                  "✅ **If/Elif/Else** — Game logic, loot drops, level requirements",
                  "✅ **For Loops** — Farming enemies, processing inventories, wave defense",
                  "✅ **While Loops** — Game loops, interactive menus, battle systems",
                  "✅ **Lists** — Inventories, party systems, enemy rosters",
                  "✅ **Dictionaries** — Character stats, item databases, complex game data",
                  "✅ **Functions** — Reusable abilities, damage calculators, organized code",
                  "✅ **Classes** — Player objects, enemy objects, professional architecture",
                  "✅ **A Complete Text RPG** — Everything combined into a real game!",
                  "✅ **Pygame Basics** — Graphics, input, and the game loop"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "What's Next?"
              },
              {
                type: "list",
                items: [
                  "🎮 **Pygame Deep Dive** — Build full graphical games with sprites, animations, and sound",
                  "🐢 **Turtle Graphics** — Create visual programs and simple animations",
                  "🌐 **Web Games** — Learn JavaScript to make browser games",
                  "🤖 **AI for Games** — Teach enemies to be smart with pathfinding algorithms",
                  "📱 **App Development** — Build mobile apps with Python (Kivy)",
                  "🏆 **Game Jams** — Join coding competitions like Ludum Dare or PyWeek",
                  "💻 **Replit** — Share your games online for free at replit.com"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Game Ideas to Build Next"
              },
              {
                type: "list",
                items: [
                  "🎲 Number guessing game with difficulty levels",
                  "✊ Rock Paper Scissors with win tracking",
                  "🃏 Blackjack / 21 card game",
                  "🐍 Snake game (with Pygame)",
                  "👾 Space Invaders clone",
                  "🏃 Infinite runner / platformer",
                  "♟️ Chess or checkers",
                  "🏰 Expand your Text RPG into an epic adventure!"
                ]
              },
              {
                type: "tip",
                content: "The BEST way to learn is to BUILD! Don't just read tutorials — pick a game idea and start making it. You'll get stuck, google the answer, learn something new, and get unstuck. That's how real developers work every single day!"
              },
              {
                type: "text",
                content: `You're not just a gamer anymore — you're a **game maker**. You see the code behind the games. You understand the logic behind the loot drops. You know why that enemy behaves the way it does.

Keep coding, keep creating, and most importantly, have FUN! 🎮✨🚀`
              }
            ]
          }
        }
      ]
    }
  ]
};
