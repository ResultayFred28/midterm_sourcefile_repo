import array

# ---------- Variable initialization ----------
# Create an empty integer array ('i') that will store the scores,
# and set the counters/totals to zero before they are used.
Scores = array.array('i', [])
sum = 0
ave = 0
passed = 0
failed = 0

# ==============================================================
# ITEM 1 - Create and Populate the Array
# ==============================================================

# Ask the user how many scores will be entered
ilan = int(input("how many scores will you enter: "))

# Loop to get each score from the user and add it to the array
for i in range(ilan):
    ilalagay = int(input(f"Enter score {i + 1}: "))
    Scores.append(ilalagay)

# Display the complete array
print(Scores)

# ==============================================================
# ITEM 2 - Analyze and Manipulate the Array
# ==============================================================

# Start with the first score as the highest and lowest value
highestScore = Scores[0]
lowestScore = Scores[0]

# Loop through every score to find the highest and lowest,
# count passed/failed scores, and compute the running total
for x in Scores:
    # Check for the highest score
    if x > highestScore:
        highestScore = x
    # Check for the lowest score
    if x < lowestScore:
        lowestScore = x
    # Count passed and failed scores (75 is the passing mark)
    if x > 75:
        passed += 1
    else:
        failed += 1

    # Add the score to the running total
    sum += x

# Compute the average
ave = sum / ilan

# Display the results of the analysis
print('Highest Score: ', highestScore)
print('Lowest Score: ', lowestScore)
print('Total Score: ', sum)
print('Average: ', ave)
print('Passed: ', passed)
print('Failed: ', failed)

print()

# ==============================================================
# ITEM 3 - Convert and Manipulate Using a List
# ==============================================================

# Convert the array into a list and display it
list_Scores = list(Scores)

print(list_Scores)

# Ask for an additional score and add it to the end of the list
add = int(input("Enter an additional score: "))
list_Scores.append(add)

# Ask for a score to remove; only remove it if it exists in the list
remove = int(input("enter a score to remove: "))
if remove in list_Scores:
    list_Scores.remove(remove)
    print(f'{remove} was remove.')
else:
    print(f'{remove} was not found.')

# Display the updated list
print(f'Updated List: {list_Scores}')

print()

# ==============================================================
# ITEM 4 - Use a Tuple and Set for Data Analysis
# ==============================================================

# ----- Part A: Tuple -----
# Convert the updated list into a tuple and display its details
tuple_Scores = tuple(list_Scores)

print(tuple_Scores)
print(f'First Scores {tuple_Scores[0]}')  # first item (index 0)
print(f'Last Score {tuple_Scores[-1]}')  # last item (index -1)
print(f'Number of Score {len(tuple_Scores)}')  # number of items

print()

# ----- Part B: Set -----
# Convert the tuple into a set (duplicates are removed automatically)
set_Scores = set(tuple_Scores)
print(f'Set of Unique Scores {set_Scores}')
print(f'Number of Unique Scores {len(set_Scores)}')

# Ask for a score and check if it already exists in the set
search = int(input("Enter a score to search: "))
if search in set_Scores:
    print(f'{search} already exists in the set')
else:
    print(f'{search} does not exist in the set')

print()

# ==============================================================
# ITEM 5 - Final Data Report
# ==============================================================

# Display all the data collected and computed in Items 1 to 4
print('============= FINAL SCORE REPORT =============')
print(f'Original Array: {Scores}')
print(f'Final Array: {list_Scores}')
print(f'Tuple Scores: {tuple_Scores}')
print(f'Unique Scores: {set_Scores}')
print(f'Total Number of Scores {len(Scores)}')
print('Highest Score: ', highestScore)
print('Lowest Score: ', lowestScore)
print('Total Score: ', sum)
print('Average: ', ave)
print('Passed: ', passed)
print('Failed: ', failed)

# ----- Score classification -----
print('============= SCORE CLASSIFICATION =============')

# Loop through the final list and classify each score
for x in list_Scores:
    if x > 90 & x < 100:
        print(f'{x} - Excellent')
    elif x > 80:
        print(f'{x} - Very Good')
    elif x > 70:
        print(f'{x} - Good')
    else:
        print(f'{x} - Bad')