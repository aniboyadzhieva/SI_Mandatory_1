a = {}
list = []
with open("dog.txt") as f:
    while True:
        line = f.readline().strip("\n")
        if not line:
            break
        a["breed"] = line
        line = f.readline().strip("\n")
        a["name"] = line
        line = f.readline().strip("\n")
        a["age"] = line
        line = f.readline().strip("\n")
        a["isFriendly"] = line
         line = f.readline().strip("\n")
        a["foodPreferences"] = line
        list.append(a.copy())
f.close()

print(list)