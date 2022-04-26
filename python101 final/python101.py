"""
giris = [[1, 2], [3, 4], [5, 6, 7]]

def reverse(giris):

    length = len(giris)
    for i in range(length):
        giris[i].sort(reverse=True) 
    giris.sort(reverse=True)
    print(giris)
    
reverse(giris)    """

"""

liste = []

def flat(dizi):
    for i in dizi:
        if type(i)==list:
            flat(i)
        else:
            liste.append(i)

flat([[1,'a',['cat'],2],[[[3]],'dog'],4,5])
print(liste)
"""
