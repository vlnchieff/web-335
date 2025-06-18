""""
Author: Chris Weaver
Date: 2025-06-18
File Name: Weaver_lemonadeStand.py
Description: This program simulates a lemonade stand business where the user can set prices, manage inventory, and sell lemonade.
"""

#Function to calculate total cost of ingredients
def calculate_cost(lemons_cost, sugar_cost):
    return lemons_cost + sugar_cost

#Function to calculate profit
def calculate_profit(lemons_cost, sugar_cost, selling_price):
    total_cost = calculate_cost(lemons_cost, sugar_cost)
    return selling_price - total_cost

#Variables for ingredient costs and selling price
lemons_cost = 4.89
sugar_cost = 2.49
selling_price = 1.50

#Using string formatting to show the cost calculation
cost_result = str(lemons_cost) + " + " + str(sugar_cost) + " = " + str(calculate_cost(lemons_cost, sugar_cost))

#Calculating profit
profit_result = "Profit = " + str(calculate_profit(lemons_cost, sugar_cost, selling_price))

#Print the results
print("Lemonade Stand Cost:")
print(cost_result)
print(profit_result)