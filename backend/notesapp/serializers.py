from .models import Notes 
from rest_framework import serializers

class NotesSerializer(serializers.ModelSerializer):
  class Meta:
    model= Notes
    fields = '__all__'
    extra_kwargs = {'author': {'read_only': True}}
