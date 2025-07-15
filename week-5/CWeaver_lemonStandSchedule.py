"""
Author: Chris Weaver
Date: Jul 15, 2025
File Name: CWeaver_lemonStandSchedule.py
Description: This program lists tasks for running a lemonade stand and schedules them across a week.
"""

# Defining a list of tasks related to running a lemonade stand
tasks = [
    "Find lemons",
    "Whip up lemonade",
    "Sell lemonade",
    "Count them dollars",
    "Rinse and Repeat"
]

# Printing each task in the list
print("Lemonade Stand Tasks:")
for task in tasks:  # Loop through each task and print it
    print(f"- {task}")

print("\nWeekly Schedule:")

# Defining days of the week
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# Looping through days to assign tasks with weekend break
for i, day in enumerate(days):
    if day == "Saturday" or day == "Sunday":
        print(f"{day}: Day off! Ain't no more lemonades.")
    else:
        # Use modulo in case there are more days than tasks
        task = tasks[i % len(tasks)]
        print(f"{day}: {task}")
# End of the program