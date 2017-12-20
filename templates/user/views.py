from django.shortcuts import render

def login(request):
    if request.method == "post":
        return render(request, 'user/signup.html')
    else:
        return render(request, 'login.html')
