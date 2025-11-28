def merge_sort(arr):
  print("starting merge_sort")
  if len(arr) > 1:
    print("breakdown:0")
    print("arr",arr)
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    # Recursively sort the two halves
    merge_sort(left)
    merge_sort(right)


    print("Breakdown:1")

    i = 0
    j = 0
    k = 0
    print("arr in br1", arr)
    print("left", left)
    print("right", right)
    print("i", i, "j", j, "k", k)
    print("len left",len(left))
    print("len right",len(right))
    
    # Merge the sorted halves
    while i < len(left) and j < len(right):
      if left[i] < right[j]:
        arr[k] = left[i]
        i += 1
      else:
        arr[k] = right[j]
        j += 1
      k += 1
    print("Breakdown:2")
    print("arr in br2", arr)
    print("left", left)
    print("right", right)
    print("i", i, "j", j, "k", k)

    # Copy remaining elements
    while i < len(left):
      arr[k] = left[i]
      i += 1
      k += 1
    print("Breakdown:3")
    print("arr in br3", arr)
    print("left", left)
    print("right", right)
    print("i", i, "j", j, "k", k)

    # Copy remaining elements
    while j < len(right):
      arr[k] = right[j]
      j += 1
      k += 1
    print("Breakdown:4")
    print("arr in br4", arr)
    print("left", left)
    print("right", right)
    print("i", i, "j", j, "k", k)
    
  #print("Sorted array:", arr)

print("ending merge_sort")
arr = [38, 27, 43, 10,]
merge_sort(arr)
print(arr)