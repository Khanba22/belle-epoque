n = int(input())
for i in range(n):
    string = input()
    pointer = 1
    steps = 0
    currentInteger = 0
    while currentInteger != 4:
        if int(string[currentInteger]) == pointer:
            currentInteger+=1
            steps +=1
        elif int(string[currentInteger]) > pointer:
            pointer+=1
            steps+=1
        else:
            pointer-=1
            steps+=1
    print(steps)