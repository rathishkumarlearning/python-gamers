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
                content: `Ever wondered how your favorite games are made? **Python** is one of the coolest programming languages to start with — and yes, you can make REAL games with it! 🎮`
              },
              {
                type: "heading",
                level: 2,
                content: "Games Made with Python"
              },
              {
                type: "list",
                items: [
                  "**Minecraft** — Uses Python for mods and plugins!",
                  "**Battlefield 2** — Game logic written in Python",
                  "**Eve Online** — Massive space game using Python",
                  "**Civilization IV** — AI and game logic in Python"
                ]
              },
              {
                type: "tip",
                content: "Python is used by NASA, Google, and Netflix too! Learning it opens tons of doors. 🚀"
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Code!"
              },
              {
                type: "text",
                content: "Let's write your first Python program. Every coder starts here:"
              },
              {
                type: "code",
                language: "python",
                filename: "hello_gamer.py",
                code: `# Your first Python program!
print("Hello, Gamer! 🎮")
print("Welcome to Python!")
print("Let's make some games!")`
              },
              {
                type: "text",
                content: "See that? `print()` shows text on the screen. Easy!"
              },
              {
                type: "checkpoint",
                content: "Try changing the message to your gamer tag! What's your username?"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Variables = Game Stats",
          completed: false,
          content: {
            description: "Learn variables by thinking about them like character stats in your favorite RPG!",
            sections: [
              {
                type: "text",
                content: "In games, your character has **stats** — health, mana, level, gold. In Python, we store these in **variables**!"
              },
              {
                type: "code",
                language: "python",
                filename: "player_stats.py",
                code: `# Your character stats! 🎮
player_name = "DragonSlayer99"
health = 100
mana = 50
level = 1
gold = 25

print(f"Player: {player_name}")
print(f"❤️ Health: {health}")
print(f"💙 Mana: {mana}")
print(f"⭐ Level: {level}")
print(f"💰 Gold: {gold}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Types of Variables"
              },
              {
                type: "list",
                items: [
                  "**Strings** (text) — player names, items: `\"Sword\"`, `\"DragonSlayer\"`",
                  "**Integers** (whole numbers) — health, gold: `100`, `50`",
                  "**Floats** (decimals) — damage multiplier: `1.5`, `2.0`",
                  "**Booleans** (true/false) — is_alive: `True` or `False`"
                ]
              },
              {
                type: "code",
                language: "python",
                filename: "variable_types.py",
                code: `# Different types of game data
weapon_name = "Diamond Sword"    # String (text)
damage = 25                      # Integer (whole number)
crit_chance = 0.15               # Float (decimal)
is_legendary = True              # Boolean (True/False)

print(f"Weapon: {weapon_name}")
print(f"Damage: {damage}")
print(f"Crit Chance: {crit_chance * 100}%")
print(f"Legendary: {is_legendary}")`
              },
              {
                type: "tip",
                content: "Variable names can't have spaces! Use underscores: `player_health` not `player health`"
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
                explanation: "True and False are Boolean values — perfect for yes/no or on/off situations like 'is the player alive?'"
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "Math = Damage Calculations",
          completed: false,
          content: {
            description: "Learn math operations by calculating game damage, gold, and experience points!",
            sections: [
              {
                type: "text",
                content: "Every game needs math! Damage calculations, gold rewards, XP gains — it's all math. Let's level up your skills! 📊"
              },
              {
                type: "code",
                language: "python",
                filename: "damage_calc.py",
                code: `# Combat math! ⚔️
base_damage = 20
weapon_bonus = 15
crit_multiplier = 2

# Total damage calculation
total_damage = (base_damage + weapon_bonus) * crit_multiplier
print(f"💥 Critical Hit! {total_damage} damage!")

# Gold calculation
gold_per_enemy = 10
enemies_defeated = 5
total_gold = gold_per_enemy * enemies_defeated
print(f"💰 Gold earned: {total_gold}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Math Operators"
              },
              {
                type: "code",
                language: "python",
                filename: "operators.py",
                code: `# All the math you need for games!
print(10 + 5)   # Addition: 15
print(10 - 5)   # Subtraction: 5
print(10 * 5)   # Multiplication: 50
print(10 / 5)   # Division: 2.0
print(10 ** 2)  # Power (10 squared): 100
print(17 % 5)   # Remainder: 2 (useful for turns!)
print(17 // 5)  # Floor division: 3`
              },
              {
                type: "heading",
                level: 2,
                content: "Level Up System"
              },
              {
                type: "code",
                language: "python",
                filename: "level_up.py",
                code: `# XP and Leveling System 📈
current_xp = 0
xp_per_kill = 25
kills = 8

# Gain XP from kills
current_xp = current_xp + (xp_per_kill * kills)
print(f"Total XP: {current_xp}")

# Check level (100 XP per level)
level = current_xp // 100
print(f"Level: {level}")

# XP to next level
xp_to_next = 100 - (current_xp % 100)
print(f"XP to next level: {xp_to_next}")`
              },
              {
                type: "tip",
                content: "The `%` (modulo) operator gives you the remainder. Super useful for things that repeat — like turns in a game!"
              },
              {
                type: "checkpoint",
                content: "Create your own damage formula! Add armor reduction to the calculation."
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
            description: "Learn if/else by coding game decisions — is the player alive? Did they win?",
            sections: [
              {
                type: "text",
                content: "Games are full of decisions: Is the player's health zero? Did they collect the key? Can they open the door? This is all **if/else** logic!"
              },
              {
                type: "code",
                language: "python",
                filename: "health_check.py",
                code: `# Health check! ❤️
health = 25

if health > 50:
    print("You're doing great! 💪")
elif health > 20:
    print("⚠️ Health low! Find a potion!")
else:
    print("☠️ CRITICAL! You're about to die!")

print(f"Current health: {health}")`
              },
              {
                type: "warning",
                content: "Python uses INDENTATION (spaces) to know what's inside the if. Always use 4 spaces!"
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
                code: `# All the ways to compare things
health = 100
required_level = 5
player_level = 7

print(health == 100)    # Equal to: True
print(health != 50)     # Not equal: True
print(health > 50)      # Greater than: True
print(health < 150)     # Less than: True
print(health >= 100)    # Greater or equal: True
print(player_level >= required_level)  # Can use the item!`
              },
              {
                type: "heading",
                level: 2,
                content: "Loot Drop System"
              },
              {
                type: "code",
                language: "python",
                filename: "loot_drop.py",
                code: `import random

# Random loot drop! 🎁
drop_chance = random.randint(1, 100)
print(f"Roll: {drop_chance}")

if drop_chance <= 5:
    print("🌟 LEGENDARY DROP! Epic Sword!")
elif drop_chance <= 20:
    print("💜 Rare item! Magic Shield!")
elif drop_chance <= 50:
    print("💚 Common item: Health Potion")
else:
    print("Nothing dropped... try again!")`
              },
              {
                type: "tip",
                content: "`random.randint(1, 100)` gives a random number from 1 to 100. Perfect for loot chances!"
              },
              {
                type: "quiz",
                question: "What prints if health = 75?\n\nif health > 80:\n    print('A')\nelif health > 50:\n    print('B')\nelse:\n    print('C')",
                options: [
                  { id: "a", text: "A" },
                  { id: "b", text: "B" },
                  { id: "c", text: "C" },
                  { id: "d", text: "Nothing" }
                ],
                correct: "b",
                explanation: "75 is NOT greater than 80, so skip 'A'. But 75 IS greater than 50, so print 'B'!"
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Combining Conditions",
          completed: false,
          content: {
            description: "Use AND, OR, NOT to create complex game rules — like checking multiple conditions at once!",
            sections: [
              {
                type: "text",
                content: "Real games check MULTIPLE things: Do you have the key AND enough gold? Are you a warrior OR a mage? Let's learn to combine conditions!"
              },
              {
                type: "code",
                language: "python",
                filename: "combined.py",
                code: `# Shop purchase check 🛒
gold = 150
level = 10
has_membership = True
item_price = 100
required_level = 5

# AND - ALL conditions must be true
if gold >= item_price and level >= required_level:
    print("✅ Purchase successful!")
    gold = gold - item_price
else:
    print("❌ Can't buy this item!")

print(f"Gold remaining: {gold}")`
              },
              {
                type: "heading",
                level: 2,
                content: "AND, OR, NOT"
              },
              {
                type: "code",
                language: "python",
                filename: "logic_gates.py",
                code: `# Game access rules 🚪
is_premium = False
level = 25
has_key = True

# AND - both must be true
if level >= 20 and has_key:
    print("🚪 Dungeon unlocked!")

# OR - at least one must be true
if is_premium or level >= 20:
    print("🎁 Bonus content available!")

# NOT - flips true/false
is_banned = False
if not is_banned:
    print("✅ Welcome to the game!")

# Combining them
if (has_key or is_premium) and not is_banned:
    print("🎮 Full access granted!")`
              },
              {
                type: "heading",
                level: 2,
                content: "Class Selection"
              },
              {
                type: "code",
                language: "python",
                filename: "class_select.py",
                code: `# Choose your class! ⚔️
player_class = "mage"
strength = 5
intelligence = 15

# Check if stats match the class
if player_class == "warrior" and strength >= 10:
    print("⚔️ Strong warrior! Bonus damage!")
elif player_class == "mage" and intelligence >= 10:
    print("🔮 Powerful mage! Bonus spell power!")
elif player_class == "rogue" and (strength >= 8 or intelligence >= 8):
    print("🗡️ Skilled rogue! Bonus agility!")
else:
    print("Keep training to unlock bonuses!")`
              },
              {
                type: "tip",
                content: "Use parentheses `()` to group conditions when mixing AND and OR. It makes your code clearer!"
              },
              {
                type: "checkpoint",
                content: "Create a quest giver that checks if you have: level >= 10 AND (completed_tutorial OR is_veteran_player)"
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
          title: "For Loops = Farming",
          completed: false,
          content: {
            description: "Learn for loops by farming enemies, collecting loot, and repeating actions!",
            sections: [
              {
                type: "text",
                content: "Ever grinded enemies to get XP? That's a LOOP! Do the same action over and over. Let's code it! 🔄"
              },
              {
                type: "code",
                language: "python",
                filename: "enemy_farm.py",
                code: `# Farming enemies for XP! 👾
total_xp = 0
xp_per_enemy = 25

print("⚔️ Starting the grind!")
for enemy in range(5):
    print(f"Enemy {enemy + 1} defeated!")
    total_xp = total_xp + xp_per_enemy

print(f"\\n🎉 Total XP earned: {total_xp}")`
              },
              {
                type: "heading",
                level: 2,
                content: "How range() Works"
              },
              {
                type: "code",
                language: "python",
                filename: "range_demo.py",
                code: `# range() creates a sequence of numbers
print("range(5) gives: 0, 1, 2, 3, 4")

for i in range(5):
    print(f"Count: {i}")

print("---")

# range(start, stop)
print("range(1, 6) gives: 1, 2, 3, 4, 5")
for i in range(1, 6):
    print(f"Level {i}")

print("---")

# range(start, stop, step)
print("Counting by 2s:")
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8`
              },
              {
                type: "heading",
                level: 2,
                content: "Inventory Loop"
              },
              {
                type: "code",
                language: "python",
                filename: "inventory.py",
                code: `# Loop through inventory! 🎒
inventory = ["Sword", "Shield", "Potion", "Key", "Map"]

print("📦 Your inventory:")
for item in inventory:
    print(f"  - {item}")

print(f"\\nTotal items: {len(inventory)}")

# With index numbers
print("\\n📦 Inventory (numbered):")
for i, item in enumerate(inventory, 1):
    print(f"  {i}. {item}")`
              },
              {
                type: "tip",
                content: "`enumerate()` gives you both the position AND the item. The `, 1` starts counting from 1 instead of 0!"
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
                explanation: "range(3) gives 0, 1, 2 — that's 3 numbers, so 3 loops!"
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "While Loops = Game Loop",
          completed: false,
          content: {
            description: "Learn while loops — the foundation of every game's main loop!",
            sections: [
              {
                type: "text",
                content: "Every game has a **main loop** that keeps running until you quit or lose. That's a **while loop**!"
              },
              {
                type: "code",
                language: "python",
                filename: "game_loop.py",
                code: `# Simple game loop! 🎮
health = 100
game_running = True
turn = 0

print("⚔️ Battle Start!")

while game_running and health > 0:
    turn = turn + 1
    damage = 20
    health = health - damage
    
    print(f"Turn {turn}: You took {damage} damage! HP: {health}")
    
    if health <= 0:
        print("💀 Game Over!")
        game_running = False
    elif turn >= 5:
        print("🎉 You survived 5 turns! You win!")
        game_running = False

print("Thanks for playing!")`
              },
              {
                type: "warning",
                content: "Be careful! While loops can run FOREVER if the condition never becomes False. Always have a way to stop!"
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
                code: `# break = ESCAPE the loop immediately!
print("🔍 Searching for treasure...")
rooms = ["empty", "monster", "trap", "TREASURE", "exit"]

for room in rooms:
    print(f"Entering: {room}")
    if room == "TREASURE":
        print("🎉 Found it! Stopping search.")
        break  # Exit loop immediately!

print("---")

# continue = SKIP to next iteration
print("⚔️ Fighting enemies (skip shields)...")
enemies = ["goblin", "SHIELD", "orc", "SHIELD", "dragon"]

for enemy in enemies:
    if enemy == "SHIELD":
        print("🛡️ Can't attack shield, skipping...")
        continue  # Skip to next enemy
    print(f"Attacked {enemy}!")`
              },
              {
                type: "heading",
                level: 2,
                content: "Input Loop"
              },
              {
                type: "code",
                language: "python",
                filename: "input_loop.py",
                code: `# Menu system with while loop 📋
# (This would work in a real Python environment!)

choice = ""
gold = 100

print("🏪 Welcome to the Shop!")
print("Commands: buy, sell, stats, quit")

# In a real game, this loop would keep running
# until the player types "quit"

# Simulated choices for demo:
choices = ["stats", "buy", "quit"]

for choice in choices:
    print(f"\\n> {choice}")
    
    if choice == "stats":
        print(f"💰 Gold: {gold}")
    elif choice == "buy":
        print("You bought a potion! -10 gold")
        gold = gold - 10
    elif choice == "quit":
        print("👋 Thanks for shopping!")
        break`
              },
              {
                type: "checkpoint",
                content: "Create a battle loop where the player attacks until the monster's HP reaches 0!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Lists = Inventories",
      lessons: [
        {
          id: "4-1",
          title: "Creating Inventories",
          completed: false,
          content: {
            description: "Learn lists by building game inventories, party members, and item collections!",
            sections: [
              {
                type: "text",
                content: "Your game inventory is a **list**! A collection of items you can add to, remove from, and search through. 🎒"
              },
              {
                type: "code",
                language: "python",
                filename: "inventory_basics.py",
                code: `# Create your inventory! 🎒
inventory = ["Sword", "Shield", "Potion", "Gold Key"]

# Access items by position (starts at 0!)
print(f"First item: {inventory[0]}")   # Sword
print(f"Last item: {inventory[-1]}")   # Gold Key

# Check how many items
print(f"Inventory size: {len(inventory)}")

# Check if you have an item
if "Gold Key" in inventory:
    print("🔑 You can open the gold door!")
else:
    print("🚪 Door is locked...")`
              },
              {
                type: "heading",
                level: 2,
                content: "Adding and Removing Items"
              },
              {
                type: "code",
                language: "python",
                filename: "inventory_manage.py",
                code: `# Managing your inventory 📦
inventory = ["Sword", "Shield"]
print(f"Start: {inventory}")

# Add items
inventory.append("Potion")      # Add to end
print(f"After loot: {inventory}")

inventory.insert(0, "Helmet")   # Add at position 0
print(f"Equipped helmet: {inventory}")

# Remove items
inventory.remove("Potion")      # Remove by name
print(f"Used potion: {inventory}")

dropped = inventory.pop()       # Remove last item
print(f"Dropped {dropped}: {inventory}")

# Clear everything (careful!)
# inventory.clear()  # Empties the whole list!`
              },
              {
                type: "heading",
                level: 2,
                content: "Party System"
              },
              {
                type: "code",
                language: "python",
                filename: "party.py",
                code: `# Your adventure party! 🎭
party = ["Hero", "Mage", "Healer"]
max_party_size = 4

print(f"Party: {party}")

# Add a new member
new_member = "Rogue"
if len(party) < max_party_size:
    party.append(new_member)
    print(f"✅ {new_member} joined the party!")
else:
    print("❌ Party is full!")

print(f"Party: {party}")

# Find a member's position
mage_position = party.index("Mage")
print(f"Mage is in slot {mage_position + 1}")

# Sort alphabetically
party.sort()
print(f"Sorted: {party}")`
              },
              {
                type: "tip",
                content: "Lists start counting at 0, not 1! So `inventory[0]` is the FIRST item."
              },
              {
                type: "quiz",
                question: "What does `inventory[-1]` give you?",
                options: [
                  { id: "a", text: "The first item" },
                  { id: "b", text: "The last item" },
                  { id: "c", text: "An error" },
                  { id: "d", text: "Nothing" }
                ],
                correct: "b",
                explanation: "Negative numbers count from the end! -1 is last, -2 is second-to-last, etc."
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "List Powers",
          completed: false,
          content: {
            description: "Advanced list tricks — slicing, sorting, and combining!",
            sections: [
              {
                type: "heading",
                level: 2,
                content: "List Slicing"
              },
              {
                type: "text",
                content: "Grab parts of a list using slicing — like selecting some cards from a deck!"
              },
              {
                type: "code",
                language: "python",
                filename: "slicing.py",
                code: `# Card deck slicing! 🃏
deck = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

# Get a range [start:end]
hand = deck[0:5]     # First 5 cards
print(f"Your hand: {hand}")

# Shortcuts
first_three = deck[:3]   # From start to 3
last_three = deck[-3:]   # Last 3 cards
print(f"First 3: {first_three}")
print(f"Last 3: {last_three}")

# Every other card
every_other = deck[::2]  # [start:end:step]
print(f"Every other: {every_other}")

# Reverse the deck!
reversed_deck = deck[::-1]
print(f"Reversed: {reversed_deck}")`
              },
              {
                type: "heading",
                level: 2,
                content: "List Comprehension (Pro Move!)"
              },
              {
                type: "code",
                language: "python",
                filename: "comprehension.py",
                code: `# Generate lists like a pro! 🚀

# Create damage values for 5 hits
damages = [25 for i in range(5)]
print(f"Damages: {damages}")

# Create increasing damage
increasing = [10 * (i + 1) for i in range(5)]
print(f"Combo damage: {increasing}")  # [10, 20, 30, 40, 50]

# Filter a list
all_items = ["Sword", "Broken Stick", "Shield", "Broken Armor", "Potion"]
good_items = [item for item in all_items if "Broken" not in item]
print(f"Good items: {good_items}")

# Transform items
items = ["sword", "shield", "potion"]
upper_items = [item.upper() for item in items]
print(f"SHOUTING: {upper_items}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Combining Lists"
              },
              {
                type: "code",
                language: "python",
                filename: "combine_lists.py",
                code: `# Merge inventories after trading! 🤝
my_items = ["Sword", "Potion"]
friend_items = ["Shield", "Gold"]

# Add lists together
combined = my_items + friend_items
print(f"Combined: {combined}")

# Extend (modifies original list)
my_items.extend(["Helmet", "Boots"])
print(f"My items now: {my_items}")

# Find min/max/sum
player_scores = [150, 200, 175, 225, 180]
print(f"Best score: {max(player_scores)}")
print(f"Worst score: {min(player_scores)}")
print(f"Total: {sum(player_scores)}")
print(f"Average: {sum(player_scores) / len(player_scores)}")`
              },
              {
                type: "checkpoint",
                content: "Create a loot system that generates 10 random items and filters out any 'Broken' ones!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "Dictionaries = Game Data",
      lessons: [
        {
          id: "5-1",
          title: "Character Stats",
          completed: false,
          content: {
            description: "Learn dictionaries by creating detailed character stat sheets!",
            sections: [
              {
                type: "text",
                content: "Dictionaries store data with **names** (keys) instead of numbers. Perfect for character stats! 📊"
              },
              {
                type: "code",
                language: "python",
                filename: "character_dict.py",
                code: `# Full character sheet! 🎮
player = {
    "name": "DragonSlayer99",
    "class": "Warrior",
    "level": 15,
    "health": 150,
    "mana": 30,
    "strength": 25,
    "defense": 20,
    "gold": 500
}

# Access stats
print(f"Player: {player['name']}")
print(f"Class: {player['class']}")
print(f"Level: {player['level']}")
print(f"❤️ HP: {player['health']}")
print(f"💪 STR: {player['strength']}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Modifying Stats"
              },
              {
                type: "code",
                language: "python",
                filename: "modify_stats.py",
                code: `# Level up system! ⬆️
player = {
    "name": "Hero",
    "level": 1,
    "xp": 0,
    "health": 100,
    "strength": 10
}

# Gain XP
player["xp"] = player["xp"] + 100

# Level up!
player["level"] = player["level"] + 1
player["health"] = player["health"] + 20
player["strength"] = player["strength"] + 5

# Add a new stat
player["mana"] = 50

print("🎉 LEVEL UP!")
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
                code: `# Game items database! 🗡️
items = {
    "sword": {
        "name": "Iron Sword",
        "damage": 25,
        "price": 100,
        "type": "weapon"
    },
    "shield": {
        "name": "Steel Shield",
        "defense": 15,
        "price": 80,
        "type": "armor"
    },
    "potion": {
        "name": "Health Potion",
        "heal": 50,
        "price": 25,
        "type": "consumable"
    }
}

# Look up an item
item_id = "sword"
item = items[item_id]

print(f"📦 {item['name']}")
print(f"   Damage: {item['damage']}")
print(f"   Price: {item['price']} gold")`
              },
              {
                type: "tip",
                content: "Use `.get()` to safely check for keys: `player.get('mana', 0)` returns 0 if 'mana' doesn't exist!"
              },
              {
                type: "quiz",
                question: "How do you access the player's health in: player = {'name': 'Hero', 'health': 100}",
                options: [
                  { id: "a", text: "player.health" },
                  { id: "b", text: "player['health']" },
                  { id: "c", text: "player[1]" },
                  { id: "d", text: "player(health)" }
                ],
                correct: "b",
                explanation: "Dictionaries use square brackets with the key name: player['health']"
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Functions = Abilities",
      lessons: [
        {
          id: "6-1",
          title: "Creating Abilities",
          completed: false,
          content: {
            description: "Learn functions by creating reusable game abilities and attacks!",
            sections: [
              {
                type: "text",
                content: "Functions are like **abilities** in games — reusable actions you can call anytime! Create once, use forever. ⚡"
              },
              {
                type: "code",
                language: "python",
                filename: "abilities.py",
                code: `# Create attack abilities! ⚔️

def basic_attack(damage):
    """A simple attack."""
    print(f"⚔️ Basic Attack! {damage} damage!")
    return damage

def power_strike(damage):
    """A powerful attack that deals 2x damage."""
    total = damage * 2
    print(f"💥 POWER STRIKE! {total} damage!")
    return total

def heal(current_hp, heal_amount, max_hp):
    """Heal the player."""
    new_hp = current_hp + heal_amount
    if new_hp > max_hp:
        new_hp = max_hp  # Can't go over max!
    print(f"💚 Healed for {heal_amount}! HP: {new_hp}")
    return new_hp

# Use the abilities!
enemy_hp = 100
player_hp = 50
max_hp = 100

enemy_hp = enemy_hp - basic_attack(25)
enemy_hp = enemy_hp - power_strike(25)
player_hp = heal(player_hp, 30, max_hp)

print(f"\\nEnemy HP: {enemy_hp}")
print(f"Player HP: {player_hp}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Parameters and Returns"
              },
              {
                type: "code",
                language: "python",
                filename: "damage_calc_func.py",
                code: `# Damage calculation function 📊

def calculate_damage(base_damage, strength, crit=False):
    """
    Calculate total damage.
    crit=False is a default value - optional!
    """
    # Add strength bonus
    total = base_damage + (strength * 2)
    
    # Apply critical hit
    if crit:
        total = total * 2
        print("💥 CRITICAL HIT!")
    
    return total

# Use it different ways
dmg1 = calculate_damage(20, 10)
print(f"Normal hit: {dmg1}")

dmg2 = calculate_damage(20, 10, crit=True)
print(f"Crit hit: {dmg2}")

# With keyword arguments (any order!)
dmg3 = calculate_damage(strength=15, base_damage=25, crit=True)
print(f"Strong crit: {dmg3}")`
              },
              {
                type: "heading",
                level: 2,
                content: "Battle System"
              },
              {
                type: "code",
                language: "python",
                filename: "battle_system.py",
                code: `import random

def roll_dice(sides=20):
    """Roll a dice with given sides."""
    return random.randint(1, sides)

def attack_roll(attacker_strength, defender_defense):
    """Check if attack hits."""
    roll = roll_dice(20)
    attack_value = roll + attacker_strength
    
    print(f"🎲 Rolled {roll} + {attacker_strength} STR = {attack_value}")
    
    if attack_value >= defender_defense:
        print("✅ Hit!")
        return True
    else:
        print("❌ Miss!")
        return False

def battle_round(player_str, player_dmg, enemy_def, enemy_hp):
    """Execute one round of combat."""
    if attack_roll(player_str, enemy_def):
        enemy_hp = enemy_hp - player_dmg
        print(f"Enemy HP: {enemy_hp}")
    return enemy_hp

# Battle!
enemy_hp = 50
enemy_hp = battle_round(5, 15, 12, enemy_hp)
enemy_hp = battle_round(5, 15, 12, enemy_hp)`
              },
              {
                type: "tip",
                content: "Functions should do ONE thing well. `calculate_damage()` only calculates — it doesn't apply the damage. Keep them focused!"
              },
              {
                type: "checkpoint",
                content: "Create a `use_potion(current_hp, potion_type)` function that heals different amounts based on potion type!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Build a Text Game!",
      lessons: [
        {
          id: "7-1",
          title: "Text Adventure",
          completed: false,
          content: {
            description: "Put it all together and build your first text-based adventure game!",
            sections: [
              {
                type: "text",
                content: "Time to use EVERYTHING you've learned! Let's build a real text adventure game. 🏰"
              },
              {
                type: "code",
                language: "python",
                filename: "adventure_game.py",
                code: `import random

# ===== GAME DATA =====
player = {
    "name": "Hero",
    "hp": 100,
    "max_hp": 100,
    "attack": 15,
    "gold": 0,
    "potions": 2
}

enemies = {
    "goblin": {"name": "Goblin", "hp": 30, "attack": 8, "gold": 10},
    "orc": {"name": "Orc", "hp": 50, "attack": 12, "gold": 25},
    "dragon": {"name": "Dragon", "hp": 100, "attack": 20, "gold": 100}
}

# ===== FUNCTIONS =====
def show_stats():
    print(f"\\n❤️ HP: {player['hp']}/{player['max_hp']}")
    print(f"💰 Gold: {player['gold']}")
    print(f"🧪 Potions: {player['potions']}")

def use_potion():
    if player["potions"] > 0:
        heal = 30
        player["potions"] -= 1
        player["hp"] = min(player["hp"] + heal, player["max_hp"])
        print(f"🧪 Used potion! +{heal} HP")
    else:
        print("❌ No potions left!")

def battle(enemy_type):
    enemy = enemies[enemy_type].copy()  # Make a copy!
    print(f"\\n⚔️ A wild {enemy['name']} appears!")
    
    while enemy["hp"] > 0 and player["hp"] > 0:
        # Player attacks
        damage = random.randint(10, player["attack"])
        enemy["hp"] -= damage
        print(f"You deal {damage} damage! Enemy HP: {max(0, enemy['hp'])}")
        
        if enemy["hp"] <= 0:
            print(f"🎉 {enemy['name']} defeated!")
            player["gold"] += enemy["gold"]
            print(f"💰 +{enemy['gold']} gold!")
            return True
        
        # Enemy attacks
        damage = random.randint(5, enemy["attack"])
        player["hp"] -= damage
        print(f"{enemy['name']} hits you for {damage}! Your HP: {player['hp']}")
        
        if player["hp"] <= 0:
            print("💀 You have been defeated...")
            return False
    
    return True

# ===== MAIN GAME =====
print("🏰 WELCOME TO THE DUNGEON!")
print("=" * 30)
show_stats()

# Room 1: Goblin
print("\\n📍 Room 1: You enter a dark cave...")
if battle("goblin"):
    show_stats()
    
    # Room 2: Orc
    print("\\n📍 Room 2: A larger chamber ahead...")
    use_potion()  # Heal up!
    if battle("orc"):
        show_stats()
        
        # Final Boss
        print("\\n📍 BOSS ROOM: Heat fills the air...")
        use_potion()
        if battle("dragon"):
            print("\\n" + "=" * 30)
            print("🏆 VICTORY! You conquered the dungeon!")
            print(f"Final gold: {player['gold']}")
            print("=" * 30)
        else:
            print("\\nGame Over... The dragon wins.")
    else:
        print("\\nGame Over... The orc was too strong.")
else:
    print("\\nGame Over... Defeated by a goblin!")`
              },
              {
                type: "tip",
                content: "This is a complete game! Try running it, then modify it — add more rooms, new enemies, or special items!"
              },
              {
                type: "checkpoint",
                content: "Add a shop between battles where the player can buy potions with their gold!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Congratulations! 🎮",
      lessons: [
        {
          id: "8-1",
          title: "You're a Coder Now!",
          completed: false,
          content: {
            description: "Amazing work! You've learned Python through games. Here's what's next on your journey!",
            sections: [
              {
                type: "text",
                content: "**CONGRATULATIONS, GAMER!** 🎉 You've learned real Python programming! You now have the skills to create your own games!"
              },
              {
                type: "heading",
                level: 2,
                content: "What You Learned"
              },
              {
                type: "list",
                items: [
                  "✅ Variables — storing player stats and game data",
                  "✅ Math — damage calculations and XP systems",
                  "✅ If/Else — game logic and decisions",
                  "✅ Loops — game loops and repeating actions",
                  "✅ Lists — inventories and collections",
                  "✅ Dictionaries — character stats and item databases",
                  "✅ Functions — reusable abilities and attacks",
                  "✅ Building a complete text adventure!"
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
                  "**Pygame** — Make games with graphics and sound! 🎨",
                  "**Turtle Graphics** — Draw shapes and simple animations 🐢",
                  "**Replit** — Code and share games online for free! 💻",
                  "**Scratch → Python** — If you know Scratch, you're ahead! 🧩",
                  "**Game Jams** — Join coding competitions! 🏆"
                ]
              },
              {
                type: "tip",
                content: "The BEST way to learn is to BUILD! Pick a simple game idea and try to make it. Start small, dream big! 🚀"
              },
              {
                type: "heading",
                level: 2,
                content: "Game Ideas to Try"
              },
              {
                type: "list",
                items: [
                  "🎲 Number guessing game",
                  "✊ Rock Paper Scissors",
                  "🃏 Blackjack / 21",
                  "🐍 Snake game (with Pygame)",
                  "👾 Space invaders clone",
                  "🏰 Expand your text adventure!"
                ]
              },
              {
                type: "text",
                content: "You're not just a gamer anymore — you're a **game maker**! Keep coding, keep creating, and most importantly, have FUN! 🎮✨"
              }
            ]
          }
        }
      ]
    }
  ]
};
