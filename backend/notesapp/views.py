from django.shortcuts import render
from .models import Notes
from .serializers import NotesSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
# Create your views here.


class NotesCreateView(generics.CreateAPIView):
  # queryset = Notes.objects.all()
  serializer_class = NotesSerializer
  permission_classes= [IsAuthenticated]

  def perform_create(self, serializer):
    serializer.save(author=self.request.user)



class NotesListView(generics.ListAPIView):
  # queryset = Notes.objects.all()
  serializer_class = NotesSerializer
  permission_classes= [IsAuthenticated]

  def get_queryset(self):
    return Notes.objects.filter(author=self.request.user)