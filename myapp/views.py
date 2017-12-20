from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext

global BASE_PATH
BASE_PATH = "/"

def index(request):
        userSession = {}
        userSession["currentStatus"] = request.session["currentStatus"] = "my status is blank"
        userSession["name"] = request.session["name"] = "gurjeet"
        userSession["id"] = request.session["id"] = "21"
        return render_to_response('layout/layout.html', {
            'userSession' : userSession,
            })

def login(self):
    return render(self, 'layout/index.html', {'name' : 'gurjeet'})

# Create your views here.
