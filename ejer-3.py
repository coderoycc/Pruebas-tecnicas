# Eliminar elementos null undefined y 0 de un array
arr = [12, -2, 0, None, 21, 120, 0, 234]
arr = list(filter(lambda x: x, arr))
print(arr)
