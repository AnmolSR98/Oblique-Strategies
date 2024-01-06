import random

def getQuote():

    path = "code\\quotes.txt"

    input_file = open(path, "r", encoding = "utf8")
    input_lines = (input_file.read()).splitlines()
    input_file.close()
    goodlines = []
    for line in input_lines:
        goodlines.append(line)
    #print(goodlines)

    return goodlines[random.randint(0, len(goodlines))]    

#print(getQuote())
